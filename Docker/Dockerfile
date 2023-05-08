FROM node:19-alpine3.16
RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot
ENV NODE_ENV=production
RUN mkdir -p /home/nonroot/docker/artifact
COPY --chown=nonroot:nonroot public/ /home/nonroot/docker/artifact/public/
COPY --chown=nonroot:nonroot start_server.js /home/nonroot/docker/artifact/
COPY --chown=nonroot:nonroot package.json /home/nonroot/docker/artifact/
COPY --chown=nonroot:nonroot config.json /home/nonroot/docker/artifact/
WORKDIR /home/nonroot/docker/artifact
RUN  npm install
USER nonroot
COPY Docker/start.sh /home/nonroot/docker/artifact/
CMD [ "sh", "/home/nonroot/docker/artifact/start.sh" ]
