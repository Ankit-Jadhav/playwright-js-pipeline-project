# Use an official lightweight Python image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy our script into the container
COPY app.py .

# Run the script when the container starts
CMD ["python", "app.py"]