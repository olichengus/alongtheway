FROM node:17

# Working Dir
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

#Install Files
RUN npm install

#Copy Source Files
COPY . .


# Expose the API Port 
EXPOSE 5001

CMD ["npm", "run", "start"]