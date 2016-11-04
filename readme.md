2016 paulfooks@mac.com

React Timer

npm install to refresh node_modules

webpack -w

npm start









Git

git init

$ git add .

$ git commit -a -m "Initial commit"

$ git remote add origin https://github.com/PaulFooks/React-Timer.git

$ git push -u origin master



Heroku

$ heroku create

$ git remote -v
heroku	https://git.heroku.com/mighty-inlet-99344.git (fetch)
heroku	https://git.heroku.com/mighty-inlet-99344.git (push)
origin	https://github.com/PaulFooks/React-Timer.git (fetch)
origin	https://github.com/PaulFooks/React-Timer.git (push)

$ git push heroku master

$ heroku open



Tests

http://jsbin.com/

console.log('Starting tests');

function add (a, b) {
  return a + b;
}

expect(add(3,5)).toBe(8);

expect(add(10,1)).toBeA('number')

function capitilizeWord(word) {
  if(!word || typeof word != 'string') {
    word = '';
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

expect(capitilizeWord('paul')).toBe('Paul');

expect(capitilizeWord('paul')).toBeA('string')

expect(capitilizeWord()).toBe('');

console.log('All test passed');

https://github.com/mjackson/expect

toBe
expect(object).toBe(value, [message])
Asserts that object is strictly equal to value using ===.

toBeA(string)
expect(object).toBeA(string, [message])
expect(object).toBeAn(string, [message])
Asserts the typeof the given object is string.
expect(2).toBeA('number')



Installing Tests

$ npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev

https://karma-runner.github.io

https://mochajs.org/




$ npm test

> boilerplate@1.0.0 test /Users/paulfooks/Desktop/React/ReactTimer
> karma start


START:
03 11 2016 09:17:35.853:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
03 11 2016 09:17:35.866:INFO [launcher]: Starting browser Chrome
03 11 2016 09:17:37.319:INFO [Chrome 54.0.2840 (Mac OS X 10.12.1)]: Connected on socket p3k9dtAcUgwk_lfcAAAA with id 64005483
  ✔ should properly run tests

Finished in 0.013 secs / 0 secs

SUMMARY:
✔ 1 test completed




$ npm install react-addons-test-utils@0.14.7 --save-dev
















Git

In Terminal
$ git --version

Installer at http://git-scm.com
sourceforger installer

Git book - http://git-scm.com/book/en/v2

Terminal
git version 2.10.1

Add git to folder
$ git init
Initialized empty Git repository in /Users/paulfooks/Desktop/React/ReactWeather/.git/



paulfooks at PJF-MacBookPro in ~/Desktop/React/ReactWeather on master*
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	readme.md

nothing added to commit but untracked files present (use "git add" to track)
paulfooks at PJF-MacBookPro in ~/Desktop/React/ReactWeather on master*
$ git add .
paulfooks at PJF-MacBookPro in ~/Desktop/React/ReactWeather on master*
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   readme.md

paulfooks at PJF-MacBookPro in ~/Desktop/React/ReactWeather on master*
$ git commit -m 'Add readme file'
[master ccbf038] Add readme file
 1 file changed, 1 insertion(+)
 create mode 100644 readme.md
paulfooks at PJF-MacBookPro in ~/Desktop/React/ReactWeather on master*
$ git status
On branch master
nothing to commit, working tree clean

git commit -a -m '....'

git status




Github

Check the SSH
$ ls -al ~/.ssh

Looking for pub keys
-rw-r--r--    1 paulfooks  staff   402 20 Jan  2015 github_rsa.pub

To generate keys
ssh-keygen -t rsa -b 4096 -C 'paulfooks@mac.com'

Check running
$ eval "$(ssh-agent -s)"
Agent pid 7847

$ ls -al ~/.ssh
-rw-------@   1 paulfooks  staff  1766 20 Jan  2015 github_rsa
-rw-r--r--    1 paulfooks  staff   402 20 Jan  2015 github_rsa.pub

The .pub file public key
The rsa without extension is for you only

$ ssh-add ~/.ssh/id_rsa
$ more ~/.ssh/github_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCnHQDPta9pGmGJR9aGU5YAOdKpDynxBqbqU8J0MpoOjTeWlG3VD4tg/W45RHJwl4t1XVeOJ2q8MuJX93cxoB5pge5tgaiz5/5QAPRhOkWadnG3f1FdQFs1TVUNfcrFC1F8M1+YNsLUtQe1/73a+Ey9GgNnlARiPogfOljc4XB5uLOOGVrr9E3n1E6x1lsaf/NwqJSaNXU2eJh+dHpl1xd8K/9FS+sUgNBjR3Xx0rXKWnhzifkP2GJlHftAawvqlf+RDydJ5sg2t6PCMAThNVjoGAT2uLcicGIgUScSbi3xj+m55ESDTOqWM/Abdf7NoW58AehjISWkB1yS+Gu/psUx PaulFooks@github.com

Connect to github
$ ssh -T git@github.com
Warning: Permanently added the RSA host key for IP address '192.30.253.113' to the list of known hosts.
Permission denied (publickey).

Pushing to github

…or push an existing repository from the command line

move into project folder
git remote add origin https://github.com/PaulFooks/React-Weather.git

$ git remote -v
origin	https://github.com/PaulFooks/React-Weather.git (fetch)
origin	https://github.com/PaulFooks/React-Weather.git (push)

$ git branch
* master

$ git push -u origin master

Username for 'https://github.com': PaulFooks
Password for 'https://PaulFooks@github.com':
Counting objects: 37, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (34/34), done.
Writing objects: 100% (37/37), 581.72 KiB | 0 bytes/s, done.
Total 37 (delta 8), reused 0 (delta 0)
remote: Resolving deltas: 100% (8/8), done.
To https://github.com/PaulFooks/React-Weather.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.

Changes
Make change to file

$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   app/components/Examples.jsx
	modified:   public/bundle.js
	modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")

$ git commit -a -m 'Added copy'
[master 135f406] Added copy
 3 files changed, 106 insertions(+), 2 deletions(-)

 $ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean

$ git push origin master
OR
$ git push
Counting objects: 8, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 2.61 KiB | 0 bytes/s, done.
Total 8 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To https://github.com/PaulFooks/React-Weather.git
   555f914..135f406  master -> master

   $ git status
   On branch master
   Your branch is up-to-date with 'origin/master'.
   nothing to commit, working tree clean


Heroku
https://heroku.com

Toolbelt or CLI
https://devcenter.heroku.com/articles/heroku-command-line

Download and install

$ heroku

$ heroku apps --all
=== paulfooks@mac.com Apps
un1v3rse-instagram


$ heroku auth:whoami
paulfooks@mac.com


Changes to package.json
"start": "node server.js"
Also means to start server locally npm start

Server.js
const PORT = process.env.PORT || 3000

Also redirect https to http as OpenWeather free tier only allows http

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
})

$ heroku create
Creating app... done, ⬢ polar-reaches-39539
https://polar-reaches-39539.herokuapp.com/ | https://git.heroku.com/polar-reaches-39539.git

$ git remote -v
heroku	https://git.heroku.com/polar-reaches-39539.git (fetch)
heroku	https://git.heroku.com/polar-reaches-39539.git (push)
origin	https://github.com/PaulFooks/React-Weather.git (fetch)
origin	https://github.com/PaulFooks/React-Weather.git (push)


$ git push heroku master
Counting objects: 50, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (47/47), done.
Writing objects: 100% (50/50), 584.83 KiB | 0 bytes/s, done.
Total 50 (delta 16), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=true
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version (latest stable) via semver.io...
remote:        Downloading and installing node 5.11.1...
remote:        Using default npm version: 3.8.6
remote:
remote: -----> Restoring cache
remote:        Skipping cache restore (new runtime signature)
remote:
remote: -----> Building dependencies
remote:        Installing node modules (package.json)
remote:        boilerplate@1.0.0 /tmp/build_575fc710b7d30cd693095d6a444c8370
remote:        ├─┬ axios@0.15.2
remote:        │ └─┬ follow-redirects@0.0.7
remote:        │   └── stream-consume@0.1.0
remote:        ├─┬ express@4.14.0
remote:        │ ├─┬ accepts@1.3.3
remote:        │ │ ├─┬ mime-types@2.1.12
remote:        │ │ │ └── mime-db@1.24.0
remote:        │ │ └── negotiator@0.6.1
remote:        │ ├── array-flatten@1.1.1
remote:        │ ├── content-disposition@0.5.1
remote:        │ ├── content-type@1.0.2
remote:        │ ├── cookie@0.3.1
remote:        │ ├── cookie-signature@1.0.6
remote:        │ ├─┬ debug@2.2.0
remote:        │ │ └── ms@0.7.1
remote:        │ ├── depd@1.1.0
remote:        │ ├── encodeurl@1.0.1
remote:        │ ├── escape-html@1.0.3
remote:        │ ├── etag@1.7.0
remote:        │ ├─┬ finalhandler@0.5.0
remote:        │ │ ├── statuses@1.3.0
remote:        │ │ └── unpipe@1.0.0
remote:        │ ├── fresh@0.3.0
remote:        │ ├── merge-descriptors@1.0.1
remote:        │ ├── methods@1.1.2
remote:        │ ├─┬ on-finished@2.3.0
remote:        │ │ └── ee-first@1.1.1
remote:        │ ├── parseurl@1.3.1
remote:        │ ├── path-to-regexp@0.1.7
remote:        │ ├─┬ proxy-addr@1.1.2
remote:        │ │ ├── forwarded@0.1.0
remote:        │ │ └── ipaddr.js@1.1.1
remote:        │ ├── qs@6.2.0
remote:        │ ├── range-parser@1.2.0
remote:        │ ├─┬ send@0.14.1
remote:        │ │ ├── destroy@1.0.4
remote:        │ │ ├─┬ http-errors@1.5.0
remote:        │ │ │ ├── inherits@2.0.1
remote:        │ │ │ └── setprototypeof@1.0.1
remote:        │ │ └── mime@1.3.4
remote:        │ ├── serve-static@1.11.1
remote:        │ ├─┬ type-is@1.6.13
remote:        │ │ └── media-typer@0.3.0
remote:        │ ├── utils-merge@1.0.0
remote:        │ └── vary@1.1.0
remote:        ├─┬ react@0.14.8
remote:        │ ├─┬ envify@3.4.1
remote:        │ │ ├─┬ jstransform@11.0.3
remote:        │ │ │ ├── base62@1.1.1
remote:        │ │ │ ├─┬ commoner@0.10.4
remote:        │ │ │ │ ├─┬ commander@2.9.0
remote:        │ │ │ │ │ └── graceful-readlink@1.0.1
remote:        │ │ │ │ ├─┬ detective@4.3.2
remote:        │ │ │ │ │ ├── acorn@3.3.0
remote:        │ │ │ │ │ └── defined@1.0.0
remote:        │ │ │ │ ├─┬ glob@5.0.15
remote:        │ │ │ │ │ ├─┬ inflight@1.0.6
remote:        │ │ │ │ │ │ └── wrappy@1.0.2
remote:        │ │ │ │ │ ├─┬ minimatch@3.0.3
remote:        │ │ │ │ │ │ └─┬ brace-expansion@1.1.6
remote:        │ │ │ │ │ │   ├── balanced-match@0.4.2
remote:        │ │ │ │ │ │   └── concat-map@0.0.1
remote:        │ │ │ │ │ ├── once@1.4.0
remote:        │ │ │ │ │ └── path-is-absolute@1.0.1
remote:        │ │ │ │ ├── graceful-fs@4.1.9
remote:        │ │ │ │ ├── iconv-lite@0.4.13
remote:        │ │ │ │ ├─┬ mkdirp@0.5.1
remote:        │ │ │ │ │ └── minimist@0.0.8
remote:        │ │ │ │ ├── private@0.1.6
remote:        │ │ │ │ ├── q@1.4.1
remote:        │ │ │ │ └─┬ recast@0.10.43
remote:        │ │ │ │   ├── ast-types@0.8.15
remote:        │ │ │ │   ├── esprima-fb@15001.1001.0-dev-harmony-fb
remote:        │ │ │ │   └── source-map@0.5.6
remote:        │ │ │ ├── esprima-fb@15001.1.0-dev-harmony-fb
remote:        │ │ │ ├── object-assign@2.1.1
remote:        │ │ │ └─┬ source-map@0.4.4
remote:        │ │ │   └── amdefine@1.0.1
remote:        │ │ └── through@2.3.8
remote:        │ └─┬ fbjs@0.6.1
remote:        │   ├── core-js@1.2.7
remote:        │   ├─┬ promise@7.1.1
remote:        │   │ └── asap@2.0.5
remote:        │   ├── ua-parser-js@0.7.10
remote:        │   └── whatwg-fetch@0.9.0
remote:        ├── react-dom@0.14.8
remote:        └─┬ react-router@2.8.1
remote:        ├─┬ history@2.1.2
remote:        │ ├── deep-equal@1.0.1
remote:        │ ├─┬ query-string@3.0.3
remote:        │ │ └── strict-uri-encode@1.1.0
remote:        │ └── warning@2.1.0
remote:        ├── hoist-non-react-statics@1.2.0
remote:        ├── invariant@2.2.1
remote:        ├─┬ loose-envify@1.3.0
remote:        │ └── js-tokens@2.0.0
remote:        └── warning@3.0.0
remote:        
remote:
remote: -----> Caching build
remote:        Clearing previous node cache
remote:        Saving 2 cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (nothing to cache)
remote:
remote: -----> Build succeeded!
remote:        ├── axios@0.15.2
remote:        ├── express@4.14.0
remote:        ├── react@0.14.8
remote:        ├── react-dom@0.14.8
remote:        └── react-router@2.8.1
remote:        
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 15M
remote: -----> Launching...
remote:        Released v3
remote:        https://polar-reaches-39539.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/polar-reaches-39539.git
 * [new branch]      master -> master


$ heroku open
Opens in default browser
https://polar-reaches-39539.herokuapp.com/


Changes to server.js so port 3000 is available. Swap to detect https
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})




$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md
	modified:   server.js

no changes added to commit (use "git add" and/or "git commit -a")

$ git commit -am 'Update middleware for localhost'
[master 6e2276f] Update middleware for localhost
2 files changed, 199 insertions(+), 2 deletions(-)



$ git push heroku master
Counting objects: 4, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 4.46 KiB | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=true
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version (latest stable) via semver.io...
remote:        Downloading and installing node 5.11.1...
remote:        Using default npm version: 3.8.6
remote:
remote: -----> Restoring cache
remote:        Loading 2 from cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (not cached - skipping)
remote:
remote: -----> Building dependencies
remote:        Installing node modules (package.json)
remote:
remote: -----> Caching build
remote:        Clearing previous node cache
remote:        Saving 2 cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (nothing to cache)
remote:
remote: -----> Build succeeded!
remote:        ├── axios@0.15.2
remote:        ├── express@4.14.0
remote:        ├── react@0.14.8
remote:        ├── react-dom@0.14.8
remote:        └── react-router@2.8.1
remote:        
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 15M
remote: -----> Launching...
remote:        Released v4
remote:        https://polar-reaches-39539.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/polar-reaches-39539.git
   14707b9..6e2276f  master -> master


$ heroku open

http://polar-reaches-39539.herokuapp.com/#/?_k=ot0n6v



Then push to Git
$ git push -u origin master
Counting objects: 4, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 4.46 KiB | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/PaulFooks/React-Weather.git
   14707b9..6e2276f  master -> master
Branch master set up to track remote branch master from origin.


$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean




If file added
git add .

then

git commit -m 'message here'




Foundation rather than Bootstrap
http://foundation.zurb.com/sites/docs/

$ npm install css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1 foundation-sites@6.2.0 --save-dev

http://foundation.zurb.com/sites/docs/top-bar.html

http://foundation.zurb.com/sites/docs/grid.html

http://foundation.zurb.com/sites/docs/button.html

http://foundation.zurb.com/sites/docs/reveal


React
https://facebook.github.io/react/docs/react-component.html





SCSS
Sass-lang.com
From Git
npm install node-sass sass-loader --save-dev





Remove node_modules

$ ls
app               node_modules      public            server.js
karma.conf.js     package.json      readme.md         webpack.config.js

$ rm -rf ./node_modules

$ ls
app               package.json      readme.md         webpack.config.js
karma.conf.js     public            server.js


Remove Git

$ git remote
heroku
origin

$ rm -rf ./.git/

$ git status
fatal: Not a git repository (or any of the parent directories): .git
