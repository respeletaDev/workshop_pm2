<div align="center">
  <br/>
  <a href="http://pm2.io/doc/?utm_source=github" title="PM2 Keymetrics link">
    <img width=710px src="https://raw.githubusercontent.com/Unitech/pm2/master/pres/pm2-v4.png" alt="pm2 logo">
  </a>
  <br/>
<br/>
<b>P</b>(rocess) <b>M</b>(anager) <b>2</b><br/>
  <i>Runtime Edition</i>
<br/><br/>

<a href="https://badge.fury.io/js/pm2" title="NPM Version Badge">
   <img src="https://badge.fury.io/js/pm2.svg" alt="npm version" height="18">
</a>

<a href="https://img.shields.io/badge/node-%3E%3D4-brightgreen.svg" title="Node Limitation">
   <img src="https://img.shields.io/badge/node-%3E%3D4-brightgreen.svg" alt="npm version" height="18">
</a>


<br/>
<br/>
<br/>
</div>

PM2 is a Production Runtime and Process Manager for Node.js applications with a built-in Load Balancer.
It allows you to keep applications alive forever, to reload them without downtime and facilitate common Devops tasks.

Starting an application in production mode is as easy as:

```bash
$ pm2 start app.js
```

Official website: [https://pm2.io/doc/](https://pm2.io/doc/)

Works on Linux (stable) & macOS (stable) & Windows (stable).
All Node.js versions are supported starting Node.js 4.X.

[![NPM](https://nodei.co/npm/pm2.png?downloads=true&downloadRank=true)](https://nodei.co/npm/pm2/)

### Installing PM2

```bash
$ npm install pm2 -g
```

*npm is a builtin CLI when you install Node.js - [Installing Node.js with NVM](https://keymetrics.io/2015/02/03/installing-node-js-and-io-js-with-nvm/)*

### Start an application

You can start any application (Node.js, Python, Ruby, binaries in $PATH...) like that:

```bash
$ pm2 start app.js
```

Your app is now daemonized, monitored and kept alive forever.

### Managing Applications

Once applications are started you can manage them easily:

![Process listing](https://github.com/unitech/pm2/raw/master/pres/pm2-list.png)

To list all running applications:

```bash
$ pm2 list
```

Managing apps is straightforward:

```bash
$ pm2 stop     <app_name|id|'all'|json_conf>
$ pm2 restart  <app_name|id|'all'|json_conf>
$ pm2 delete   <app_name|id|'all'|json_conf>
```

Custom start apps: 


```bash
$ pm2 start pm2.process.yml 
```

```apps:
    - script   : api/src/index.js
      name     : 'api'
      log_date_format: "YYYY/MM/DD HH:mm:ss"
      max_memory_restart: 250M
      instances: 1
      exec_mode: cluster
    - script   : worker/src/index.js
      name     : 'worker'
      max_memory_restart: 150M
      log_date_format: "YYYY/MM/DD HH:mm:ss"
      instances: 1
      exec_mode: cluster
```

To have more details on a specific application:

```bash
$ pm2 describe <id|app_name>
```

To monitor logs, custom metrics, application information:

```bash
$ pm2 monit
```

**Zero Downtime Reload**

Hot Reload allows to update an application without any downtime:

```bash
$ pm2 reload all
```

Seamlessly supported by all major Node.js frameworks and any Node.js applications without any code change:

![Framework supported](https://raw.githubusercontent.com/Unitech/PM2/development/pres/cluster-support.png)

[More informations about how PM2 make clustering easy](https://keymetrics.io/2015/03/26/pm2-clustering-made-easy/)

### Terminal Based Monitoring

![Monit](https://github.com/Unitech/pm2/raw/master/pres/pm2-monit.png)

Monitor all processes launched straight from the command line:

```bash
$ pm2 monit
```

### Log Management

To consult logs just type the command:

```bash
$ pm2 logs
```

Standard, Raw, JSON and formated output are available.

Examples:

```bash
$ pm2 logs APP-NAME       # Display APP-NAME logs
$ pm2 logs --json         # JSON output
$ pm2 logs --format       # Formated output

$ pm2 flush               # Flush all logs
$ pm2 reloadLogs          # Reload all logs
```

