# Get base image from Bob build. See https://hub.docker.com/r/hexpm/elixir/tags for options.
FROM hexpm/elixir:1.13.4-erlang-24.3.2-ubuntu-focal-20211006
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /app

RUN apt-get update && apt-get install -y curl locales
RUN apt-get update && apt-get install -y --no-install-recommends build-essential

# set locale
RUN locale-gen en_US.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Set up NODE JS download
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  apt-get install -y nodejs

ENV pip_packages "ansible"

# Install Ansible and build dependencies.
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  apt-utils \
  locales \
  python3-setuptools \
  python3-pip \
  software-properties-common \
  rsyslog systemd systemd-cron sudo iproute2 \
  aptitude ca-certificates git vim \
  automake autoconf libreadline-dev libncurses-dev libssl-dev libyaml-dev libxslt-dev libffi-dev libtool unixodbc-dev unzip \
  && rm -Rf /var/lib/apt/lists/* \
  && rm -Rf /usr/share/doc && rm -Rf /usr/share/man \
  && apt-get clean
RUN sed -i 's/^\($ModLoad imklog\)/#\1/' /etc/rsyslog.conf

# Install Ansible via Pip.
RUN pip3 install $pip_packages

# Install AWS CLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
  unzip awscliv2.zip && \
  ./aws/install

# Install hex and rebar
RUN mix local.hex --force
RUN mix local.rebar --force
