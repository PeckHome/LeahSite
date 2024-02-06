FROM nginx:alpine
RUN mkdir -p /usr/share/nginx/html/backgroundimages

COPY default.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

COPY Us.jpg /usr/share/nginx/html/
COPY love.jpg /usr/share/nginx/html/
