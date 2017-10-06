FROM nginx
COPY build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/nginx.conf
