FROM python:3.9-alpine3.13
LABEL maintainer = "DJC-00"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /tmp/requirements.txt
COPY ./requirements.dev.txt /tmp/requirements.dev.txt
COPY ./app /app
WORKDIR /app
EXPOSE 8000

ARG DEV=false
RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-build-deps \
        build-base postgresql-dev musl-dev libffi-dev && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    if [ $DEV = "true" ]; \
        then /py/bin/pip install -r /tmp/requirements.dev.txt ; \
    fi && \
    rm -rf /tmp && \
    apk del .tmp-build-deps && \
    adduser \
        --disabled-password\
        --no-create-home \
        django-user

RUN apk update && \
    apk add --update --no-cache ca-certificates wget && \
    update-ca-certificates && \
    wget https://github.com/mozilla/geckodriver/releases/download/v0.31.0/geckodriver-v0.31.0-linux32.tar.gz && \
    tar -xvzf geckodriver*
    # chmod +x geckodriver && \
    # sudo mv geckodriver /usr/local/bin/

ENV PATH="/py/bin:$PATH"
ENV DRIVERPATH = "/usr/local/bin/geckodriver"

USER django-user