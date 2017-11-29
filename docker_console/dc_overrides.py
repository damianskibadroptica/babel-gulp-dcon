# # import classes to override
from docker_console.web.engines.static.builder import Builder
from docker_console.utils.console import run as run_cmd

class BuilderLocal:
    def gulp_build(self):
        print("GULP COMPILE")
        run_cmd("docker run --rm -v %s:/app -w /app droptica/babel npm run gulp -- build" % self.config.WEB['APP_ROOT'])



Builder.__bases__ += (BuilderLocal,)

# replace/add new commands
commands_overrides = {
    'gulp-build' : [ 'gulp_build' ],
}
