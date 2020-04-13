FROM nginx:alpine

# Default to UTF-8 file.encoding
RUN apk add bash
ENV LANG C.UTF-8

EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html
