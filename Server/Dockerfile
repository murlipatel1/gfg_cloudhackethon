FROM node:18.16.0
# FROM python:3.8-slim

# Running firstly the backend Application
WORKDIR /backend

COPY package*.json ./
RUN npm install --production

COPY . .

# Requirement for configuring the Postgres Password in the VM
# ----------------------------------------------------------------------------------------
#Copying the Bash Script for configuring the Postgres Image Application
# COPY configure-postgres-password.sh ./scripts

# Set the script as executable
# RUN chmod +x /scripts/configure-postgres-password.sh
# ----------------------------------------------------------------------------------------

#Build the application
# RUN npm build


# WORKDIR /backend/ml_model

# COPY ./requirements.txt .

# RUN python3 install --upgrade pip \
#     && pip install -r requirements.txt 

# #Copy the Entire Application
# COPY ./ml_model . 

# # -----------------------------------------------------------------------
# # Used to configure the cloud-sql in the flask api
# COPY ../configure-cloudsql-password.sh ../scripts

# #Running the Scrip for configuration
# RUN RUN chmod +x /scripts/configure-cloudsql-password.sh

ENV GOOGLE_CLOUD_PROJECT ${googlecloudproject}
ENV GOOGLE_CLOUD_SQL_USERNAME ${googlecloudsqlusername}
ENV GOOGLE_CLOUD_SQL_PASSWORD ${googlecloudsqlpassword}
ENV GOOGLE_CLOUD_SQL_DATABASE ${googlecloudsqldatabase}
ENV GOOGLE_CLOUD_SQL_HOST ${googlecloudsqlhost}
ENV GOOGLE_CLOUD_SQL_PORT ${googlecloudsqlport}

# -----------------------------------------------------------------------

# RUN python3 db.py

# CMD ["python3", "stock_market_prediction.py"]

#Start the application
CMD ["npm", "start"]