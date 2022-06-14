FROM node:12.16.1-alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

RUN apk add --no-cache nodejs npm
RUN npm install -g react-native
RUN npm install

# Run in dev
# CMD ["npm", "run", "android"]

# Run in prod
CMD ["npm", "run", "android-release"]
