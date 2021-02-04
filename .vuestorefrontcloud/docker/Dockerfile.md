FROM node:12

WORKDIR /var/www

COPY . .

RUN yarn install --network-concurrency 1 && yarn build && yarn cache clean --all

COPY .vuestorefrontcloud/docker/vue-storefront.sh /usr/local/bin/

ENTRYPOINT ["vue-storefront.sh"]
