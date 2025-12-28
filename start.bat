@echo off
echo ========================================
echo   News Flow - Starting Application
echo ========================================
echo.

REM Check if virtual environment exists
if exist "venv\Scripts\activate.bat" (
    echo Activating virtual environment...
    call venv\Scripts\activate.bat
) else if exist ".venv\Scripts\activate.bat" (
    echo Activating virtual environment...
    call .venv\Scripts\activate.bat
) else (
    echo No virtual environment found. Running with system Python...
)

echo.
echo Starting Flask application...
echo.
echo Application will be available at: http://127.0.0.1:5000
echo Press Ctrl+C to stop the server
echo.

REM Set Flask environment variables
set FLASK_APP=app.py
set FLASK_ENV=development

REM Start Flask app
python app.py

REM Keep window open if there's an error
if errorlevel 1 (
    echo.
    echo ========================================
    echo   Error occurred! Check the output above
    echo ========================================
    pause
)
