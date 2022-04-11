FROM alpine
RUN apk update && apk add nodejs
COPY index.js /app/index.js
ENTRYPOINT ["node","/app/index.js"]
