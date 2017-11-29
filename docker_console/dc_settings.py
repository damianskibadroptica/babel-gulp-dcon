# import default values from static engine (required)
from docker_console.web.engines.static.conf.default import *

#################
# BASE SETTINGS #
#################

WEB = {
    'ENGINE': 'static',
    'USE_CUSTOM_ENGINE': False, # True/False - useful when we have default and custom engine with the same name
    'APP_LOCATION': 'app'
}

TESTS = {
    'IMAGES': {
    },
    'LOCATION': "tests"
}

ENV = None

####################
# SITE SETTINGS #
####################

DEV_DOCKER_IMAGES = {
    'default': ('droptica/drupal-dev', None),
    'additional_images': [
      ('droptica/babel', './docker/custom_images/Babel')
    ]
}
