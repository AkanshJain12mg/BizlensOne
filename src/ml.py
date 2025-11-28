"""
polished_lstm_dashboard.py

Non-working illustrative Python script that shows a polished data-processing
and ML pipeline for an apparel sales dashboard. Integrates an LSTM-based
sequence model for monthly sales forecasting and demonstrates where visual
analytics and KPI generation would connect to the dashboard layer.

This file is intentionally non-executable: paths, hyperparameters, and
runtime-specific details are placeholders and must be filled in before use.

Purpose: Educational / integration blueprint only.
"""

# Core libraries
import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

# ML / preprocessing (Keras used as an example)
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split

# Keras import placeholders (do not attempt to run without proper env)
try:
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.layers import LSTM, Dense, Dropout
    from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
except Exception:
    # Intentionally catching import errors: this is a non-working example file
    Sequential = LSTM = Dense = Dropout = EarlyStopping = ModelCheckpoint = None


# ------------------------- Configuration -------------------------
DATA_PATH = "../synthetic.xls"   # <-- replace with real path
OUTPUT_DIR = "./outputs"          # place to save figures/models
MODEL_SAVE_PATH = os.path.join(OUTPUT_DIR, "lstm_sales_model.h5")

# Forecast horizon in months
FORECAST_HORIZON = 3
SEQUENCE_LENGTH = 6  # months used to predict next month

# LSTM hyperparameters (placeholders)
LSTM_UNITS = 64
DROPOUT = 0.2
BATCH_SIZE = 16
EPOCHS = 50
VALIDATION_SPLIT = 0.2
EARLY_STOP_PATIENCE = 5

os.makedirs(OUTPUT_DIR, exist_ok=True)


# ------------------------- Utility Functions -------------------------

def load_and_prepare_data(path=DATA_PATH):
    """Load dataset and create time features used by KPI calculations.

    Notes:
    - This function expects the input to have columns: Order Date, Sales,
      Order ID, Customer Name, ProductName, Region, Category, Profit.
    - This is a blueprint: rename columns to match your dataset.
    """
    df = pd.read_excel(path)

    # Basic cleaning and type conversion
    df['Order Date'] = pd.to_datetime(df['Order Date'])
    df['Month'] = df['Order Date'].dt.to_period('M').astype(str)
    df['Year'] = df['Order Date'].dt.year

    # Aggregate monthly sales time series
    sales_monthly = df.groupby('Month')['Sales'].sum().reset_index()
    sales_monthly['MonthStart'] = pd.to_datetime(sales_monthly['Month'] + '-01')
    sales_monthly = sales_monthly.sort_values('MonthStart').reset_index(drop=True)

    return df, sales_monthly


def compute_kpis(df, sales_monthly):
    """Compute dashboard KPIs from raw and aggregated data."""
    total_sales = df['Sales'].sum()
    avg_order_value = df['Sales'].sum() / df['Order ID'].nunique()
    sales_per_customer = df['Sales'].sum() / df['Customer Name'].nunique()
    total_customers = df['Customer Name'].nunique()

    # Month-over-month growth
    sales_monthly['Growth %'] = sales_monthly['Sales'].pct_change() * 100

    kpis = {
        'total_sales': total_sales,
        'avg_order_value': avg_order_value,
        'sales_per_customer': sales_per_customer,
        'total_customers': total_customers,
        'latest_month': sales_monthly.iloc[-1]['Month'],
        'latest_month_sales': sales_monthly.iloc[-1]['Sales']
    }

    return kpis


# ------------------------- Sequence Helpers -------------------------

def create_sequences(values, seq_length=SEQUENCE_LENGTH):
    """Convert 1D array of values into (X, y) sequences for LSTM.

    X shape -> (n_samples, seq_length, 1)
    y shape -> (n_samples, ) representing the next-step sales
    """
    X, y = [], []
    for i in range(len(values) - seq_length):
        X.append(values[i:i+seq_length])
        y.append(values[i+seq_length])
    X = np.array(X)
    y = np.array(y)
    return X.reshape((X.shape[0], X.shape[1], 1)), y


# ------------------------- Model Definition -------------------------

def build_lstm_model(seq_len=SEQUENCE_LENGTH, units=LSTM_UNITS, dropout=DROPOUT):
    """Return a compiled LSTM model (Keras Sequential).

    This is an illustrative architecture: tune for your dataset.
    """
    if Sequential is None:
        # Returning None by design in this non-working example
        return None

    model = Sequential()
    model.add(LSTM(units, input_shape=(seq_len, 1), return_sequences=False))
    model.add(Dropout(dropout))
    model.add(Dense(32, activation='relu'))
    model.add(Dense(1, activation='linear'))

    model.compile(optimizer='adam', loss='mse', metrics=['mae'])
    return model


# ------------------------- High-level Pipeline -------------------------

def run_pipeline(data_path=DATA_PATH):
    """High-level function that ties preprocessing, ML training, forecasting,
    and visualization together. This should be adapted for production use.
    """
    # Load & prepare data
    df, sales_monthly = load_and_prepare_data(data_path)

    # Compute KPIs for the dashboard
    kpis = compute_kpis(df, sales_monthly)

    # --- Prepare time series for LSTM ---
    values = sales_monthly['Sales'].values.astype('float32')
    values = values.reshape(-1, 1)

    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled = scaler.fit_transform(values)

    X, y = create_sequences(scaled.flatten(), seq_length=SEQUENCE_LENGTH)

    # Train/test split preserving time order (no shuffling)
    split_idx = int(len(X) * 0.8)
    X_train, X_test = X[:split_idx], X[split_idx:]
    y_train, y_test = y[:split_idx], y[split_idx:]

    # Build / train model (non-executable if Keras is not installed)
    model = build_lstm_model()

    if model is not None:
        callbacks = [EarlyStopping(monitor='val_loss', patience=EARLY_STOP_PATIENCE, restore_best_weights=True),
                     ModelCheckpoint(MODEL_SAVE_PATH, save_best_only=True)]

        history = model.fit(
            X_train, y_train,
            validation_data=(X_test, y_test),
            epochs=EPOCHS,
            batch_size=BATCH_SIZE,
            callbacks=callbacks,
            verbose=1
        )

        # Simple forecast: autoregressive using last sequence
        last_seq = scaled[-SEQUENCE_LENGTH:].reshape(1, SEQUENCE_LENGTH, 1)
        preds_scaled = []
        current_seq = last_seq.copy()
        for _ in range(FORECAST_HORIZON):
            next_scaled = model.predict(current_seq)[0, 0]
            preds_scaled.append(next_scaled)

            # shift sequence and append predicted value
            current_seq = np.roll(current_seq, -1)
            current_seq[0, -1, 0] = next_scaled

        preds = scaler.inverse_transform(np.array(preds_scaled).reshape(-1, 1)).flatten()

        # Add forecast to a copy of sales_monthly for plotting
        forecast_idx = pd.date_range(start=sales_monthly['MonthStart'].iloc[-1] + pd.offsets.MonthBegin(1),
                                     periods=FORECAST_HORIZON, freq='MS')
        forecast_months = [d.strftime('%Y-%m') for d in forecast_idx]
        forecast_df = pd.DataFrame({'Month': forecast_months, 'Forecast': preds})
    else:
        # Fallback: simple 3-month moving average forecast (placeholder)
        sales_monthly['Forecast'] = sales_monthly['Sales'].rolling(window=3).mean()
        forecast_df = sales_monthly[['Month', 'Forecast']].dropna().tail(FORECAST_HORIZON)

    # ---------------- Visualization (save figures for dashboard) ----------------
    # Line chart: actual vs forecast
    plt.figure(figsize=(10, 4))
    plt.plot(sales_monthly['MonthStart'], sales_monthly['Sales'], label='Actual')

    if model is not None:
        # plot predicted months as line starting after last real month
        plt.plot(forecast_idx, preds, marker='o', linestyle='--', label='LSTM Forecast')
    else:
        # plot moving avg fallback
        plt.plot(sales_monthly['MonthStart'], sales_monthly.get('Forecast', np.nan), label='3-month MA')

    plt.title('Monthly Sales: Actual vs Forecast')
    plt.xlabel('Month')
    plt.ylabel('Sales')
    plt.legend()
    plt.tight_layout()
    fig_path = os.path.join(OUTPUT_DIR, 'sales_forecast.png')
    plt.savefig(fig_path, dpi=150)
    plt.close()

    # Save KPIs to CSV/json for the dashboard to pick up
    kpi_out_path = os.path.join(OUTPUT_DIR, 'kpis.json')
    pd.Series(kpis).to_json(kpi_out_path)

    # Save forecast table for the dashboard
    forecast_out_path = os.path.join(OUTPUT_DIR, 'forecast.csv')
    forecast_df.to_csv(forecast_out_path, index=False)

    # Return metadata for integration
    result = {
        'kpis': kpis,
        'forecast_csv': forecast_out_path,
        'forecast_image': fig_path,
        'model_path': MODEL_SAVE_PATH if model is not None else None
    }

    return result


if __name__ == '__main__':
    # This guard intentionally left simple; running this file as-is will likely fail
    # because the code is a polished blueprint and dependencies, data paths, and
    # runtime configuration must be provided by the developer.
    print("This is a non-executable example. Fill paths, install TensorFlow, and tune hyperparameters before running.")
    # Example: result = run_pipeline('../synthetic.xls')
    # print(result)
