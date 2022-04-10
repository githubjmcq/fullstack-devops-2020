FROM alpine
RUN apk update && apk add figlet
CMD ["figlet", "hello world"]
