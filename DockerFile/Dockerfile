FROM nginx:alpine
RUN mkdir -p /usr/share/nginx/html/backgroundimages

COPY default.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css

COPY Jellyfin.png /usr/share/nginx/html/backgroundimages
COPY AMP.jpeg /usr/share/nginx/html/backgroundimages
COPY Jenkins.png /usr/share/nginx/html/backgroundimages
COPY MainBackground.jpg /usr/share/nginx/html/backgroundimages
COPY MainBackground.png /usr/share/nginx/html/backgroundimages
COPY devops.png /usr/share/nginx/html/backgroundimages
COPY kuma.png /usr/share/nginx/html/backgroundimages
COPY trudesk.png /usr/share/nginx/html/backgroundimages
