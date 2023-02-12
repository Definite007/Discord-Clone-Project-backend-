FROM node:16-alpine as builder
WORKDIR '/app'
COPY . .
CMD echo "hello world"
RUN npm install
# lets build the application
RUN npm run start
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
