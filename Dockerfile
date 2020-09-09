FROM alpine:latest

COPY config.yml /root/.config/code-server/config.yaml
COPY code-server-3.5.0-linux-amd64 /code-server-3.5.0-linux-amd64

RUN apk add --update nodejs npm openssl libc6-compat
RUN ln -s /usr/bin/node /code-server-3.5.0-linux-amd64/lib/node
RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

ENTRYPOINT ["/code-server-3.5.0-linux-amd64/bin/code-server"]