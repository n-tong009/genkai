# AisleWire

[![license](https://img.shields.io/github/license/glitchworker/aislewire.svg)](https://github.com/glitchworker/aislewire/blob/master/LICENSE)

**AisleWire for front-end website Developments.**

gulp / handlebars / scss / webpack (babel)

## ð¤ AisleWire ?

AisleWireï¼ã¢ã¤ã«ã¯ã¤ã¤ã¼ï¼  
Aisle ã¯åº§å¸­åéã®```ãéè·¯ã```ãã©ãã³èªã§```ãç¿¼ã```ãæå³ã  
Wire ã¯```ãç·ã```ã```ãç¶²ã```ãªã©ãæå³ãã¾ãã  
ããããã¢ãã¸ã®```ãç¹ããã```ã¨```ãå¼·ãã```ãè¡¨ãã¦ãã¾ãã

## ð Require

- Windows or Mac or Linux ( Verified )
- This function requires supervisor permission.
- npm v6.9.0 over
- node v8.3.0 over

## ð° Usage

1. [NodeJS](https://nodejs.org/en/) ããã¦ã³ã­ã¼ããã¤ã³ã¹ãã¼ã«ããï¼ææ°çãæ¨å¥¨ï¼

2. ```ã¿ã¼ããã«```ã¾ãã¯```ã³ãã³ããã­ã³ãã```ã```ç®¡çèæ¨©é```ã§éã

3. ```npm install -g yarnpkg``` ã§ Yarn ãã¤ã³ã¹ãã¼ã«ããï¼npm ã®ã¾ã¾ãã«ãããå ´åã¯ä¸è¦ï¼

4. ```yarn global add gulp``` ã§ Gulp ãã¤ã³ã¹ãã¼ã«ããï¼npm ã®å ´å ```npm install -g gulp```ï¼

5. ```yarn install``` ã§å¿è¦ãªããã±ã¼ã¸ãã¤ã³ã¹ãã¼ã«ï¼npm ã®å ´å ```npm install```ï¼

6. ```/src/config.json``` ãéãåé ç®ãç·¨éãã¦ããï¼å¾ãããå¤æ´å¯è½ï¼

7. ```yarn setup``` ãååã«1åº¦ã ãå®è¡ããï¼npm ã®å ´å ```npm run dev```ï¼

8. ```yarn start``` ã§éçºç°å¢ãèµ·åããï¼èªåçã«æ¢å­ã®ãã©ã¦ã¶ãèµ·åï¼ï¼npm ã®å ´å ```npm run start```ï¼

9. å¾ã¯ ```/src/``` ãã©ã«ãåã®ãã¡ã¤ã«ãç·¨éãä½æ¥­ããã

10. ä»¥é8ã9ã®ç¹°ãè¿ã

> æ¬çªç°å¢ã«ã¢ããã­ã¼ãããå ´åã```yarn prod``` ãå®è¡ã ```/htdocs/``` åãã¢ãããã  
â» åè¨­å®ãã¡ã¤ã«ã«ã¤ãã¦ã¯ Setting ãéçºç¨ã®ã³ãã³ãã«ã¤ãã¦ã¯ Scripts ãåç§
> 
> ã¾ãã6 ã®æã« ```LOCAL_SERVER``` ã® ```GIT``` é ç®ã ```true``` ã«ãã¦ããã¨  
ã­ã¼ã«ã«Gitã®ç°å¢ãæ§ç¯ããä»¥éãæ¬çªã«ã¢ããã­ã¼ãããã¾ã§ã®éãã¼ã¸ã§ã³ç®¡çã¨ãã¦å©ç¨ã§ãã¾ãã  
â»ãããã¯ã¼ã¯ãä»ãã°ä»ã®ãã½ã³ã³ãããå±åç·¨éãå¯è½ã«ãªãä¾¿å©ã§ãã  
ãä½¿ç¨æ¹æ³ã¯éå¸¸ã®Gitã¨åãè¦é ãªã®ã§æå¹ã«ãã¦ããäºããªã¹ã¹ã¡ãã¾ãã

## ð§ Setting

### project

| ãã¡ã¤ã«å | èª¬æ |
|----|---|
| /gulpfile.js | gulp ã«é¢ããè¨­å®ãã¡ã¤ã« |
| /tasks/webpack.config.js | webpack ã«é¢ããè¨­å®ãã¡ã¤ã« |
| /src/config.json | å±éè¨­å®ãã¡ã¤ã« |

#### config.json

```json
{
  "WEB_SITE_NAME": "ããã¯ãµã¤ãåã§ã",
  "WEB_AUTHOR": "ããã¯ä½æèã§ã",
  "WEB_MODIFIER": "ããã¯ç·¨éèã§ã",
  "SITE_URL": {
    "DEV": "http://dev.hoge.com/",
    "STG": "http://stg.hoge.com/",
    "PROD": "http://prod.hoge.com/"
  },
  "CURRENT_DIR": "",
  "ABSOLUTE_DIR": false,
  "ASSETS_DIR": {
    "COMMON": "assets/",
    "PC": "assets/",
    "SP": ""
  },
  "LOCAL_SERVER": {
    "API": false,
    "GIT": false,
    "GSX": false
  }
}
```

### src

| ãã¡ã¤ã«å | èª¬æ |
|----|---|
| /src/templates/**/*.hbs | template åã§ä½¿ãè¦å®å¤ |
| /src/common/stylesheets/_config.scss | stylesheet åã§ä½¿ãè¦å®å¤ |
| /src/_modules/api/data.json | api ã§ä½¿ãè¦å®å¤ |
| /src/_modules/data/**/* | å±éã®è¦å®å¤ï¼ json, js, yml èª­ã¿è¾¼ã¿å¯è½ï¼ |
| /src/_modules/import/data.json | import ã§ä½¿ãè¦å®å¤ |

#### /api/data.json
```json
{
  "users": [
    {
      "id": 1,
      "name": "hoge",
      "email": "hoge@hoge.com"
    },
	  {
      "id": 2,
      "name": "fuga",
      "email": "fuga@fuga.com"
    }
  ]
}
```

#### /**/*.hbs

```yaml
---
layout: pc
RESPONSIVE: true
REDIRECT: false

BODY_CLASS: index
ADD_STYLES:
ADD_SCRIPTS_HEADER:
ADD_SCRIPTS_FOOTER:

LANGUAGE: ja
NAMESPACE: website
META_CHARSET: UTF-8
META_ROBOTS: index,follow
META_VIEWPORT: width=device-width,initial-scale=1,minimum-scale=1,shrink-to-fit=no,viewport-fit=cover
META_TITLE: ããã¯ã¿ã¤ãã«ã§ã
META_SHARE_TITLE:
META_KEYWORDS: ããã¯ã­ã¼ã¯ã¼ãã§ã
META_DESCRIPTION: ããã¯ãã£ã¹ã¯ãªãã·ã§ã³ã§ã
META_SHARE_DESCRIPTION:
META_AUTHOR:
META_COPYRIGHT:
META_APPLE_ICON: favicon.png
META_ICON: favicon.png
META_XHTML_ICON: favicon.ico
META_FACEBOOK: true
META_FACEBOOK_IMAGE: ogp_image.jpg
META_FACEBOOK_LOCALE: ja_JP
META_FACEBOOK_ID:
META_TWITTER: true
META_TWITTER_CARD: summary_large_image
META_TWITTER_ACCOUNT:
META_TWITTER_APP_ANDROID:
META_TWITTER_APP_IPAD:
META_TWITTER_APP_IPHONE:
META_GOOGLE: false
META_WINDOWS: false
META_WINDOWS_IMAGE: tile_image.png
META_WINDOWS_COLOR: #000000
META_OLD_BROWSER: false
META_PWA_MODE: false
---
```

#### /import/data.json

```json
[
  {
    "TYPE": "dir",
    "DATA": "ãã©ã«ãå",
    "OUTPUT": "åºååã®ãã¹"
  },
  {
    "TYPE": "file",
    "DATA": "ãã¡ã¤ã«å",
    "OUTPUT": "åºååã®ãã¹"
  }
]
```

## ð How to use

å±éã®è¦å®å¤ã¯ ```config.json``` ã«å®ç¾©ãã¦ãã ããã  
è¦å®å¤ã®åç§æ¹æ³ãªã©ã¯ä»¥ä¸ããè¦§ãã ããã

#### handlebarsã®å ´å

| è¨è¿° | èª¬æ |
|----|---|
| {{ RELATIVE_PATH }} | ãã£ã¬ã¯ããªç¸å¯¾ãã¹ |
| {{ CURRENT_DIR }} | ã«ã¬ã³ããã£ã¬ã¯ããª |
| {{ ASSETS_DIR.COMMON }} | ã¢ã»ãããã£ã¬ã¯ããªï¼ Common ï¼ |
| {{ ASSETS_DIR.PC }} | ã¢ã»ãããã£ã¬ã¯ããªï¼ PC ï¼ |
| {{ ASSETS_DIR.SP }} | ã¢ã»ãããã£ã¬ã¯ããªï¼ SP ï¼ |
| {{ FILE_PATH }} | ãã¡ã¤ã«ãã¹ |
| {{ WEB_SITE_URL }} | ãµã¤ãURLï¼ã«ã¬ã³ããã£ã¬ã¯ããªãå«ãï¼ |
| {{ WEB_SITE_NAME }} | ãµã¤ãå |

> ```/src/templates/pages/*.hcb``` åã®åé ­ã«åãã¼ã¸ã®åå¥è¨­å®ãåºæ¥ã¾ãã  
â» handlebars ã®ä»æ§ã«ä¹ã£åã ```{{}}``` ç­ã§å¤æ°ã¨ãã¦åç§ãå¯è½ã§ãã  
ä¸è¨ä»¥å¤ã«ããåãã¼ã¸ã«è¨­å®ãããåå®¹ã¯ã©ãã§ãå¼ã³åºãã¾ãã  
ä»¥ä¸ã¯ä¸é¨ä¾ãªã®ã§è©³ç´°ã¯ãã¡ã¤ã«ãé²è¦§ãã ããã  
â»é ç®ã¯ã¦ã¼ã¶ã¼ã®ä»»æã§è¿½å ãããã¨ãå¯è½ã§ãã

| è¨è¿° | èª¬æ |
|----|---|
| {{ META_TITLE }} | ãã¼ã¸å |
| {{ META_KEYWORDS }} | ãã¼ã¸ã­ã¼ã¯ã¼ã |
| {{ META_DESCRIPTION }} | ãã¼ã¸ãã¹ã¯ãªãã·ã§ã³ |
| {{ META_AUTHOR }} | ãã¼ã¸è£½ä½è |
| {{ META_APPLE_ICON }} | iPhoneç¨ã¢ã¤ã³ã³ |
| {{ META_ICON }} | ã¢ãã³ç¨ã¢ã¤ã³ã³ |
| {{ META_XHTML_ICON }} | æ§IEç¨ã¢ã¤ã³ã³ |
| {{ META_FACEBOOK }} | facebookã®metaã¿ã° |
| {{ META_TWITTER }} | twitterã®metaã¿ã° |
| {{ META_WINDOWS }} | windowsã®metaã¿ã° |

> ã¾ã ```layout``` ã®é ç®ã ```pc``` or ```sp``` ã«å¤æ´ããã°  
```/src/templates/layouts/*.hcb``` ã«ãããã¡ã¤ã«ãã²ãªå½¢ã¨ãã¦  
å±éãã³ãã¬ã¼ãã¨ãã¦èª­ã¿è¾¼ããã¨ãåºæ¥ã¾ãã  
ã¬ã¹ãã³ã·ãå¯¾å¿ãããªãå ´åã ```RESPONSIVE``` ã®é ç®ã ```true``` ã«å¤æ´ããã°   
ã¬ã¤ã¢ã¦ãããã¼ã¸ã®åºãåããå¯è½ã«ãªãã¾ãã
>
> åºååã«é¢ãã¦ã¯ ```/src/templates/pages/``` ã«ä»»æã§éç½®ããã  
ãã£ã¬ã¯ããªæ§æã®ã¾ã¾ ```/htdocs/``` ã«æ¸ãåºãããããã«ãã¦ããã®ã§  
ã¦ã¼ã¶ã¼ãä»»æã§æ§æãèããè¨­ç½®ãã¦ãã ããã

#### scssã®å ´å

| è¨è¿° | èª¬æ |
|----|---|
| #{$WEB_BASE_URL} | ãµã¤ãURL |
| #{$WEB_SITE_URL} | ãµã¤ãURLï¼ã«ã¬ã³ããã£ã¬ã¯ããªãå«ãï¼ |
| #{$WEB_SITE_NAME} | ãµã¤ãå |
| #{$WEB_AUTHOR} | ãµã¤ãå¶ä½è |
| #{$WEB_MODIFIER} | ãµã¤ãç·¨éè |

> gulpfile.js ã« gulp-header ãå©ç¨ãã¦æ¸¡ãã¦ããã®ã§  
```#{$WEB_SITE_URL}``` ç­ã§åç§ã§ãã¾ãã

#### Javascriptã®å ´å

| è¨è¿° | èª¬æ |
|----|---|
| WEB_BASE_URL | ãµã¤ãURL |
| WEB_SITE_URL | ãµã¤ãURLï¼ã«ã¬ã³ããã£ã¬ã¯ããªãå«ãï¼ |
| WEB_SITE_NAME | ãµã¤ãå |
| WEB_AUTHOR | ãµã¤ãå¶ä½è |
| WEB_MODIFIER | ãµã¤ãç·¨éè |

> webpack ã« DefinePlugin ã¨ãã¦æ¸¡ãã¦ããã®ã§  
```WEB_SITE_URL``` ç­ã§åç§ã§ãã¾ãã

## Scripts

### setup

#### éçºç°å¢åæå

| Yarn ã³ãã³ã | Gulp ã³ãã³ã | èª¬æ |
|----|---|---|
| yarn setup | gulp setup | éçºç°å¢ã®åæåï¼ååã« 1 åº¦ã ãå®è¡ï¼ |

### watch

#### ç£è¦ã¿ã¹ã¯å®è¡

| Yarn ã³ãã³ã | Gulp ã³ãã³ã | èª¬æ |
|----|---|---|
| yarn start | gulp | éçºãµã¼ãã¼ãèµ·åãã |

### build

#### ãã«ãåºå

| Yarn ã³ãã³ã | Gulp ã³ãã³ã | èª¬æ |
|----|---|---|
| yarn dev | gulp build | éçºç¨ã®ãã¡ã¤ã«ãåºå |
| yarn stg | gulp build --env staging | ã¹ãã¼ã¸ã³ã°ç¨ã®ãã¡ã¤ã«ãåºå |
| yarn prod | gulp build --env production | æ¬çªç¨ã®ãã¡ã¤ã«ãåºå |

### others / clean

#### ã¤ã³ãã¼ããã¼ã¿ã®ã¿ã¹ã¯å®è¡

| Yarn ã³ãã³ã | Gulp ã³ãã³ã | èª¬æ |
|----|---|---|
| yarn import | gulp import | è¿½å ãã¼ã¿ã®åºå |

#### ãã£ã¬ã¯ããªåé¤

| Yarn ã³ãã³ã | Gulp ã³ãã³ã | èª¬æ |
|----|---|---|
| yarn run clean | gulp clean | ãã«ããã©ã«ããåé¤ |
| yarn run clearGit | gulp clearGit | ã­ã¼ã«ã«Gitãåé¤ |

## ð» Structure

### outline

	./
	âââ LICENSE
	âââ README.md
	âââ gulpfile.js
	âââ package.json
	âââ _setup
	â   âââ git
	â       âââ hidden
	â       â   âââ FETCH_HEAD
	â       â   âââ HEAD
	â       â   âââ config
	â       â   âââ description
	â       â   âââ hooks
	â       â   â   âââ applypatch-msg.sample
	â       â   â   âââ commit-msg.sample
	â       â   â   âââ post-update.sample
	â       â   â   âââ pre-applypatch.sample
	â       â   â   âââ pre-commit.sample
	â       â   â   âââ pre-push.sample
	â       â   â   âââ pre-rebase.sample
	â       â   â   âââ prepare-commit-msg.sample
	â       â   â   âââ update.sample
	â       â   âââ info
	â       â   â   âââ exclude
	â       â   âââ objects
	â       â   â   âââ info
	â       â   â   âââ pack
	â       â   âââ refs
	â       â       âââ heads
	â       â       âââ tags
	â       âââ repository
	â           âââ HEAD
	â           âââ config
	â           âââ description
	â           âââ hooks
	â           â   âââ applypatch-msg.sample
	â           â   âââ commit-msg.sample
	â           â   âââ post-update.sample
	â           â   âââ pre-applypatch.sample
	â           â   âââ pre-commit.sample
	â           â   âââ pre-push.sample
	â           â   âââ pre-rebase.sample
	â           â   âââ prepare-commit-msg.sample
	â           â   âââ update.sample
	â           âââ info
	â           â   âââ exclude
	â           âââ objects
	â           â   âââ info
	â           â   âââ pack
	â           âââ refs
	â               âââ heads
	â               âââ tags
	âââ src
	â   âââ _modules
	â   â   âââ api
	â   â   â   âââ data.json
	â   â   âââ data
	â   â   â   âââ example.json
	â   â   â   âââ exampleFour.yml
	â   â   â   âââ exampleThree
	â   â   â   â   âââ exampleThree.json
	â   â   â   âââ exampleTwo.js
	â   â   â   âââ gsx.json
	â   â   âââ import
	â   â       âââ data.json
	â   âââ common
	â   â   âââ images
	â   â   â   âââ favicon.ico
	â   â   â   âââ favicon.png
	â   â   â   âââ ogp_image.jpg
	â   â   â   âââ tile_image.png
	â   â   âââ scripts
	â   â   â   âââ javascript
	â   â   â   â   âââ common.js
	â   â   â   â   âââ index.js
	â   â   â   â   âââ modules
	â   â   â   â       âââ _Selector.js
	â   â   â   âââ lib
	â   â   â       âââ html5shiv.min.js
	â   â   â       âââ jquery-1.12.4.min.js
	â   â   â       âââ jquery-3.4.0.min.js
	â   â   â       âââ polyfill.js
	â   â   â       âââ selectivizr.min.js
	â   â   âââ stylesheets
	â   â       âââ _config.scss
	â   â       âââ _reset.scss
	â   â       âââ mixins
	â   â       â   âââ _clearfix.scss
	â   â       â   âââ _css3fix.scss
	â   â       â   âââ _elementSize.scss
	â   â       â   âââ _fontDecoration.scss
	â   â       â   âââ _fontSize.scss
	â   â       â   âââ _fontWeight.scss
	â   â       â   âââ _hideaway.scss
	â   â       â   âââ _inlineBlock.scss
	â   â       â   âââ _inlinefix.scss
	â   â       â   âââ _mediaqueries.scss
	â   â       â   âââ _opacity.scss
	â   â       âââ utils
	â   â       â   âââ _align.scss
	â   â       â   âââ _display.scss
	â   â       â   âââ _float.scss
	â   â       â   âââ _font.scss
	â   â       â   âââ _margin.scss
	â   â       â   âââ _padding.scss
	â   â       â   âââ _tooltips.scss
	â   â       â   âââ _visibility.scss
	â   â       â   âââ _width.scss
	â   â       âââ vars
	â   â           âââ _color.scss
	â   â           âââ _easing.scss
	â   âââ config.json
	â   âââ images
	â   â   âââ pc
	â   â   â   âââ common
	â   â   â   â   âââ image.png
	â   â   â   âââ hoge
	â   â   â   â   âââ fuga
	â   â   â   â   â   âââ image.png
	â   â   â   â   âââ image.png
	â   â   â   âââ image.png
	â   â   â   âââ index
	â   â   â       âââ image.png
	â   â   âââ sp
	â   â       âââ common
	â   â       â   âââ image.png
	â   â       âââ hoge
	â   â       â   âââ fuga
	â   â       â   â   âââ image.png
	â   â       â   âââ image.png
	â   â       âââ image.png
	â   â       âââ index
	â   â           âââ image.png
	â   âââ javascripts
	â   â   âââ pc
	â   â   â   âââ common.js
	â   â   â   âââ hoge.js
	â   â   â   âââ index.js
	â   â   â   âââ modules
	â   â   âââ sp
	â   â       âââ common.js
	â   â       âââ hoge.js
	â   â       âââ index.js
	â   â       âââ modules
	â   âââ stylesheets
	â   â   âââ pc
	â   â   â   âââ app.scss
	â   â   â   âââ components
	â   â   â   âââ layouts
	â   â   â   â   âââ _content.scss
	â   â   â   â   âââ _default.scss
	â   â   â   â   âââ _wrapper.scss
	â   â   â   âââ pages
	â   â   â   â   âââ _hoge.scss
	â   â   â   â   âââ _hoge_fuga.scss
	â   â   â   â   âââ _index.scss
	â   â   â   âââ partials
	â   â   â       âââ _footer.scss
	â   â   â       âââ _header.scss
	â   â   âââ sp
	â   â       âââ app.scss
	â   â       âââ components
	â   â       âââ layouts
	â   â       â   âââ _content.scss
	â   â       â   âââ _default.scss
	â   â       â   âââ _wrapper.scss
	â   â       âââ pages
	â   â       â   âââ _hoge.scss
	â   â       â   âââ _hoge_fuga.scss
	â   â       â   âââ _index.scss
	â   â       âââ partials
	â   â           âââ _footer.scss
	â   â           âââ _header.scss
	â   âââ templates
	â       âââ components
	â       â   âââ exampleComponent.hbs
	â       âââ layouts
	â       â   âââ pc.hbs
	â       â   âââ sp.hbs
	â       âââ pages
	â       â   âââ hoge
	â       â   â   âââ fuga
	â       â   â   â   âââ index.hbs
	â       â   â   âââ index.hbs
	â       â   âââ index.hbs
	â       âââ partials
	â           âââ footer.hbs
	â           âââ header.hbs
	âââ tasks
	    âââ modules
	    â   âââ gsx2json
	    â   â   âââ api.js
	    â   â   âââ app.js
	    â   âââ handlebars
	    â   â   âââ config.js
	    â   â   âââ errorMessage.js
	    â   â   âââ extendBlocks.js
	    â   â   âââ getData.js
	    â   â   âââ getLayout.js
	    â   â   âââ index.js
	    â   â   âââ registerPartials.js
	    â   â   âââ render.js
	    â   âââ node-sass-functions
	    â   â   âââ index.js
	    â   â   âââ processor.js
	    â   âââ node-sass-glob
	    â       âââ index.js
	    âââ webpack.config.js

### src

	./src
	âââ _modules
	â   âââ api
	â   âââ data
	â   âââ import
	âââ common
	â   âââ images
	â   âââ scripts
	â   â   âââ javascript
	â   â   â   âââ modules
	â   â   âââ lib
	â   âââ stylesheets
	â       âââ mixins
	â       âââ utils
	â       âââ vars
	âââ images
	â   âââ pc
	â   âââ sp
	âââ javascripts
	â   âââ pc
	â   â   âââ modules
	â   âââ sp
	â       âââ modules
	âââ stylesheets
	â   âââ pc
	â   â   âââ components
	â   â   âââ layouts
	â   â   âââ pages
	â   â   âââ partials
	â   âââ sp
	â       âââ components
	â       âââ layouts
	â       âââ pages
	â       âââ partials
	âââ templates
	    âââ components
	    âââ layouts
	    âââ pages
	    âââ partials

### htdocs

	./htdocs
	âââ assets
	âÂ Â  âââ common
	âÂ Â  âÂ Â  âââ images
	âÂ Â  âÂ Â  âââ js
	âÂ Â  âÂ Â      âââ lib
	âÂ Â  âââ css
	âÂ Â  âââ images
	âÂ Â  âââ js
	âââ sp

## â¨ Import Copy Data

> ```/src/_modules/import/``` ã«ãã¡ã¤ã«ãè¨­ç½®ãã  
åãã£ã¬ã¯ããªã® ```data.json``` ãç·¨éãããã¨ã«ãã£ã¦  
æå®ããåã«ã³ãã¼ãã¦ãããæ©è½ã§ããå¤é¨ã½ã¼ã¹ãåãè¾¼ãæãªã©  
éå®ããã®ã§ãå©ç¨ãã ããã

```json
[
  {
    "TYPE": "dir",
    "DATA": "hoge",
    "OUTPUT": "assets/hoge/"
  },
  {
    "TYPE": "file",
    "DATA": "hoge.json",
    "OUTPUT": "assets/hoge"
  }
]
```

ä¾ãã°ãä¸è¨ã®æ§ã«è¨­å®ããã¨ãã©ã«ãã®å ´åã¯  
```assets/hoge/``` ã®ä¸­ã« ```hoge``` åã®ãã¼ã¿ãã³ãã¼ããã¾ãã  
ãã¡ã¤ã«ã®å ´åã¯
```assets/``` ã« ```hoge.json``` ãã³ãã¼ããã¾ãã

## â¨ API Mock Server

```config.json``` ã® ```LOCAL_SERVER``` ã® ```API``` ãæå¹ã«ããã¨èµ·åãã¾ãã

> æ©è½ã¨ãã¦ã¯ JSON ãã¡ã¤ã«ãç¨æãã¦ããã° API ã®ãªã¯ã¨ã¹ããåãåãã  
ã¾ãã¯è¿ãã¦ãããã·ã³ãã«ãª RESTful API ãµã¼ãã¼ãç¨æãããã¨ãåºæ¥ã¾ãã  
å¯¾å¿ãã¦ããã¡ã½ããã¯ GET / POST / PUT / DELETE ããã« PATCH ããµãã¼ããã¦ãã¾ãã  
JSONP ã¾ãã¯ CORS ã«å¯¾å¿ãã¦ãã¾ãã®ã§ã¯ã­ã¹ãã¡ã¤ã³ã§ãä½¿ããããã«ãªã£ã¦ãã¾ãã

```/src/_modules/api/``` ä»¥ä¸ã« JSON ãã¡ã¤ã«ãè¨­ç½®ãããã¨ã«ãã£ã¦  
ãã®ãã¡ã¤ã«ã API ã¨ãã¦ã¬ã¹ãã³ã¹ãè¿ãããããã«ãªãã¾ãã  
â»ãã¡ã¤ã«æ°ã«å¶éã¯ç¡ãéä¸ã«ããã¤ã§ã JSON ãã¡ã¤ã«ãè¨­ç½®ãããã¨ãåºæ¥ã¾ãã  
ããã©ã«ãã®ãã¼ãçªå·ã¯ 9000 çªã«è¨­å®ããã¦ããã®ã§  
http://localhost:9000/api/ ç­ã§ã¢ã¯ã»ã¹ããäºãå¯è½ã§ãã  
```/api/db``` ã«ã¢ã¯ã»ã¹ããã¨ãã£ã¬ã¯ããªåå¨ã¦ã® JSON ãçµåãããã¼ã¿ãåå¾åºæ¥ã¾ãã

ä¾ã¨ãã¦ä»¥ä¸ã®ãããª ```/src/_modules/api/data.json``` ãéç½®ãã¦ãã¾ãã

```json
{
  "users": [
    {
      "id": 1,
      "name": "hoge",
      "email": "hoge@hoge.com"
    },
	  {
      "id": 2,
      "name": "fuga",
      "email": "fuga@fuga.com"
    }
  ]
}
```

ãã®å ´åã```/api/users``` ã«ã¢ã¯ã»ã¹ããã¨ users ã®ã¿ãåå¾ãããã¨ãå¯è½ã§ãã

```json
[
  {
    "id": 1,
    "name": "hoge",
    "email": "hoge@hoge.com"
  },
  {
    "id": 2,
    "name": "fuga",
    "email": "fuga@fuga.com"
  }
]
```

ã¾ãã```/api/users?id=1``` ã¨ããã°çµãè¾¼ã¿æ¤ç´¢ãå¯è½ã§ãã

```json
[
  {
    "id": 1,
    "name": "hoge",
    "email": "hoge@hoge.com"
  }
]
```

### ä¸é¨ç´°ããæ©è½ã®ç´¹ä»

â»ãã®ãµã¼ãã¼ã¯ [json-server](https://github.com/typicode/json-server) ãä½¿ç¨ãã¦ããã®ã§  
ããã®ä»ç´°ããä½¿ãæ¹ã¯ä¸è¨ã®å¬å¼ãã­ã¥ã¡ã³ãç­ãããåèãã ããã

#### Filter
ãã©ã¡ã¼ã¿ã¼åã«ããçµãè¾¼ã¿ã¯ä»¥ä¸ã§å¯è½ã§ãã

http://localhost:9000/api/users?name=hoge&email=hoge@hoge.com  
http://localhost:9000/api/users?id=1&id=2  
http://localhost:9000/api/users?name=fuga

#### Slice
```_start``` ã¨ ```_end``` åã¯ ```_limit``` ãä½¿ç¨ãã¦  
ãã¼ã¿ãã¹ã©ã¤ã¹ãããã¨ãåºæ¥ã¾ãã

http://localhost:9000/api/users?_start=1&_end=3

#### Sort
```_sort``` ã¨ ```_order``` ãä½¿ç¨ãã¦  
ãã¼ã¿ãã½ã¼ããã¦ä¸¦ã¹æ¿ããäºãåºæ¥ã¾ãã  
â»ããã©ã«ãã¯æé ã§è¿ããã¾ãã

éé   
http://localhost:9000/api/users?_sort=id&_order=DESC  
æé   
http://localhost:9000/api/users?_sort=id&_order=ASC

#### Operators

```_gte``` ã¨ ```_lte``` ãä½¿ç¨ãã¦ãã¼ã¿ã®åå¾ç¯å²ãå¶éãããã¨ãåºæ¥ã¾ãã  
http://localhost:9000/api/users?id_gte=1&id_lte=3

```_ne``` ãä½¿ç¨ãã¦ä¸é¨ãã¼ã¿ãé¤å¤ãããã¨ãåºæ¥ã¾ãã  
http://localhost:9000/api/users?id_ne=1

```_like``` ãä½¿ç¨ãã¦æ­£è¦è¡¨ç¾ãä½¿ã£ã¦ãã£ã«ã¿ãªã³ã°åºæ¥ã¾ãã  
http://localhost:9000/api/users?name_like=hoge

#### Full-text search

```q``` ãä½¿ç¨ãã¦å¨ã¦ã®ãã¼ã¿ããæ¤ç´¢ãããã¨ãåºæ¥ã¾ãã  
http://localhost:9000/api/users?q=fuga

#### Filter

```id``` ã«ä»»æã®ã·ã¼ãIDãæå®ããã¨ãã®ã·ã¼ãããã¼ã¹ãã¦ããã¾ãã  
http://localhost:5000/api?id=ã·ã¼ãID

```q``` ãä½¿ç¨ãã¦å¨ã¦ã®ãã¼ã¿ããæ¤ç´¢ãããã¨ãåºæ¥ã¾ãã  
http://localhost:5000/api?q=æ¤ç´¢å

```rows``` ã true ã¾ãã¯ false ã«ããã¨é ç®ã®è¡¨ç¤º/éè¡¨ç¤ºãå¯è½ã«ãªãã¾ãã  
http://localhost:5000/api?rows=false

```columns``` ã true ã¾ãã¯ false ã«ããã¨é ç®ã®è¡¨ç¤º/éè¡¨ç¤ºãå¯è½ã«ãªãã¾ãã  
http://localhost:5000/api?columns=false

## â¨ GSX Server

```config.json``` ã® ```LOCAL_SERVER``` ã® ```GSX``` ãæå¹ã«ããã¨èµ·åãã¾ãã

> æ©è½ã¨ãã¦ã¯ GoogleSpreadsheet ã®ã·ã¼ããç¨æããã° API ã®ãªã¯ã¨ã¹ããåãåãã  
ã¾ãã¯è¿ãã¦ãããã·ã³ãã«ãª RESTful API ãµã¼ãã¼ãç¨æãããã¨ãåºæ¥ã¾ãã  
> â»ã·ã¼ãã«é¢ãã¦ã¯ã```ã¦ã§ãã«å¬é``` ãé¸æãã¦å¤ããé²è¦§åºæ¥ãç¶æã«ãã¦ãã ããã
>
> GSX Server ããã©ã¦ã¶ã§éãã¨ ```/src/_modules/data/``` ã« ```gsx.json``` ã¨ãã  
ãã¡ã¤ã«ãçæããããã³ãã¬ã¼ãåã®å±éå¤æ°ã¨ãã¦ãå¼ã³åºãäºãå¯è½ã«ãªãã¾ãã  
ã¹ãã¬ããã·ã¼ããæ´æ°ããå ´åã ```gsx.json``` ãæ´æ°ãããå ´åã¯ãåãããã«  
ãã©ã¦ã¶ã§éãã¨ä¸æ¸ãããã watch ãåãã®ã§ãã³ãã¬ã¼ãã«ã¯å³åº§ã«èªåã§åæ ããã¾ãã

## ð¿ Browsers support

éå¸¸ã®è¨­å®ã§ã¯æ¯è¼çæ°ãããã©ã¦ã¶ã§æ©è½ããããã«ãªã£ã¦ãã¾ãã  
```/src/templates/pages/*.hbs``` ã®ä¸­ã® ``META_OLD_BROWSER`` ã ```true``` ã«ããã¨   
```Internet Explorer 7``` ã¾ã§ã®æ§ãã©ã¦ã¶ã«ãå¯¾å¿ããäºãåºæ¥ã¾ãã  
ä¸è¨ã®å ´åã¯ä¸é¨ Polyfill ãä½¿ç¨ãã¦ãã¾ãã ``Internet Explorer 8`` ã¾ã§ã¯  
ã¬ã¹ãã³ã·ãã«ã¯éå¯¾å¿ã«ãªã£ã¦ãã¾ãã ```RESPONSIVE``` é ç®ã ``false`` ã«ããã  
``css3-mediaqueries`` ãªã©ã® Fallback ãä½¿ç¨ãã¦ãå©ç¨ãã ããã

## ð± PWA mode (Mobile Only)

```/src/templates/pages/*.hbs``` ã®ä¸­ã® ```META_PWA_MODE``` ã ```true``` ã«ããã¨   
ãã¼ã è¿½å æã«ãã«ã¹ã¯ãªã¼ã³ã§ç«ã¡ä¸ããWebAppã¢ã¼ããæå¹ã«ãããã¨ãåºæ¥ã¾ãã

## ð¤ What you can do with templates ?

æ¬ãã³ãã¬ã¼ãã§ãã©ãã¯ããã¯ã¹åãã¦ããæ©è½ã®è©³ç´°ã   
ä»¥ä¸ã«éæè¨è¿°ãã¦ããã¾ãã®ã§ãåèãã ããã

#### ç¹°ãè¿ãã®è¦ç´ ã handlebars ã«åºåãããå ´å

```html
<li class="list0">ãªã¹ã1ï¼ãã­ã¹ã1</li>
<li class="list1">ãªã¹ã2ï¼ãã­ã¹ã2</li>
<li class="list2">ãªã¹ã3ï¼ãã­ã¹ã3</li>
<li class="list3">ãªã¹ã4ï¼ãã­ã¹ã4</li>
<li class="list4">ãªã¹ã5ï¼ãã­ã¹ã5</li>
```

```/src/_modules/data/``` éä¸ã«ãã¡ã¤ã«ãéç½®ã hbs ã§èª­ã¿åããç¶æã«ãã¾ãã   
ä¾ã¨ãã¦ ```/src/_modules/data/example.json``` ã¨ããååã§ä½æããå ´å

```json
{
  "rows": [
    {
      "ãªã¹ã1": "ãã­ã¹ã1",
      "ãªã¹ã2": "ãã­ã¹ã2",
      "ãªã¹ã3": "ãã­ã¹ã3",
      "ãªã¹ã3": "ãã­ã¹ã5"
    }
  ]
}
```

hbs ä¸ã«ä»¥ä¸ã®è¨è¿°ãæ¸ããã¨ã«ãã£ã¦åºåãããã¨ãå¯è½ã§ãã   
â»ãã¡ãããã®ä»ã®éåã§ãåæ§ã«å¼ã³åºãäºãå¯è½ã§ãã

```hbs
{{#each data.example.rows}}
  {{#each this}}
  <li class="list{{ @index }}">{{ @key }}ï¼{{ this }}</li>
  {{/each}}
{{/each}}
```

#### SCSS ã§ç»åãã¹ãåå¾ããæ¹æ³

node-sass ã® functions æ©è½ãä½¿ãæ§ããªé¢æ°ãå©ç¨ãããã¨ãå¯è½ã§ãã   
â» /tasks/modules/node-sass-functions/ ããèª­ã¿è¾¼ãã§ãã¾ãã   

ä¾ãã°ä»¥ä¸ã®ãããªè¨è¿°ãããã¨ã ```/images/``` éä¸ã®ç»åã®URLãåå¾ã   
ããã«é«ãã¨æ¨ªå¹ãåå¾ããèªåçã«åºåããäºãå¯è½ã§ãã   

â»åºååã¯ /htdocs/assets/images/ ããã®ç¸å¯¾ãã¹   
â»åºååã¯ /src/images/ ããã®ç¸å¯¾ãã¹ï¼åºæ¬çã« ```pc/``` ã¾ãã¯ ```sp/``` ãæå®ï¼

```scss
$image: 'ï¼åºååï¼ãã£ã¬ã¯ããªå/ãã¡ã¤ã«ãã¹';
$source: 'ï¼åºååï¼ãã£ã¬ã¯ããªå/';
$width: image-width($source + $image, true);
$height: image-height($source + $image, true);

background-image: image-url($image);
width: $width;
height: $height;
```

ã¾ãã ```true``` ã ```false``` ã«å¤æ´ããã¨ ```px``` ãçãæ°å­ã®ã¿åå¾ãå¯è½ã«ãªãã®ã§   
ä»¥ä¸ã®ãããªã¬ã¹ãã³ã·ãã¹ã¿ã¤ã«ãä½ãäºãåºæ¥ã¾ãã   
â» ```elementSize_vw``` ã¯ ```/src/common/stylesheets/mixins/``` ãã include ãã¦ãã¾ãã

```scss
$image: 'ï¼åºååï¼ãã£ã¬ã¯ããªå/ãã¡ã¤ã«ãã¹';
$source: 'ï¼åºååï¼ãã£ã¬ã¯ããªå/';
$width: image-width($source + $image, false);
$height: image-height($source + $image, false);

background-image: image-url($image);
background-size: contain;
@include elementSize_vw($width, $height);
```

#### SCSS ã§ãã©ã³ããµã¤ãºãä½ç½ã®ã¬ã¹ãã³ã·ãå¯¾å¿

mixin ã®åå®¹ã¯ ```/src/common/stylesheets/mixins/``` ãè¦ãã°åããã¾ãã   
SP ãµã¤ããªã©ãä½æããéã¯ãä»¥ä¸ã®ããã« include ããäºã§   
ãã¶ã¤ã³ã® ```px``` ã ```weight``` ãä¸æããã¨ã¬ã¹ãã³ã·ãå¯¾å¿ãã¦ããã¾ãã

```scss
$size: 26;
@include fontSize_vw($size);
@include fontWeight('Medium');
@include lineHeight(44, $size);
@include letterSpacing(80);
```

ã¾ãã ```margin``` ã ```padding``` ãåæ§ã§ä»¥ä¸ã®ããã«æå®ãå¯è½ã§ãã   
ä¸è¨ã¨åãããã¶ã¤ã³ã® ```px``` ã®æ°å¤ãå¥åããã ãã§å¤§ä¸å¤«ã§ãã

```scss
// ä¸æ¬ã®å ´å
@include margin_vw(10, 20, 30, 40);
// ããããã®å ´å
@include margin_top_vw(10);
@include margin_right_vw(20);
@include margin_bottom_vw(30);
@include margin_left_vw(40);

// ä¸æ¬ã®å ´å
@include padding_vw(10, 20, 30, 40);
// ããããã®å ´å
@include padding_top_vw(10);
@include padding_right_vw(20);
@include padding_bottom_vw(30);
@include padding_left_vw(40);
```

## ð Dependencies

- [NodeJS](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com/)
- [npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Handlebars.js](https://handlebarsjs.com/)
- [Scss](http://sass-lang.com/)
- [PostCSS](http://postcss.org/)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)
- [Browsersync](https://www.browsersync.io/)

## ð Issues

- [GitHub Issues](https://github.com/glitchworker/aislewire/issues)

## ð Thanks

- [Adobe Blank](https://github.com/adobe-fonts/adobe-blank)

## ð Important Notices

ç¾å¨ã¯éè¦ãªãç¥ããã¯ããã¾ããã

## ð Version History

### v0.1.0ï¼2020å¹´5æ7æ¥ï¼

- gulpfile.js ã®ä¿®æ­£ï¼AUTHOR ã®å¤ãç¶æ¿åºæ¥ã¦ããªãã£ãã®ãä¿®æ­£ï¼
- package.json ã®æ´æ°ï¼@babel/core, @babel/preset-env, gulp-purgecss, mime, webpackï¼
- README.md ã®å¤æ´

### v0.0.9ï¼2020å¹´4æ21æ¥ï¼

- _fontSize.scss ã« mixin é¢æ°è¿½å ï¼lineHeight, letterSpacingï¼
- README.md ã®å¤æ´ï¼ãã³ãã¬ã¼ãã®ä½¿ãæ¹ãè¿½å ï¼

### v0.0.8ï¼2020å¹´4æ10æ¥ï¼

- handlebars ã®æ¡å¼µé¢æ°ãã if_eq ãåé¤ããæ±ç¨åãã«ãã¼é¢æ°ãè¿½å ï¼and, or, not, eq, ne, lt, eqlt, gt, eqgtï¼```â»æ¸å¼ï¼{{#if (æ¼ç®å­ å¤1 å¤2) }} / ä¾ï¼layout == 'pc' ã®å ´å {{#if (eq layout 'pc') }}``` ã®ããã«æå®ãå¯è½
- package.json ãã if-webpack-plugin ãåé¤ãã­ã¼ã«ã«ã¢ã¸ã¥ã¼ã«ã«çµã¿è¾¼ã¿
- package.json ã®æ´æ°ï¼@babel/core, @babel/plugin-transform-classes, @babel/preset-env, autoprefixer, babel-loader, css-declaration-sorter, gulp-purgecss, handlebars, minimist, node-git-server, webpack, webpack-cliï¼
- README.md ã®å¤æ´

### v0.0.7ï¼2020å¹´1æ31æ¥ï¼

- package.json ã®æ´æ°ï¼@babel/core, @babel/plugin-transform-classes, @babel/preset-env, autoprefixer, css-declaration-sorter, front-matter, gulp-purgecss, handlebars, webpackï¼
- README.md ã®å¤æ´

### v0.0.6ï¼2019å¹´11æ11æ¥ï¼

- ãã³ãã¬ã¼ãã« ```RESPONSIVE``` ã®é ç®ãè¿½å ï¼ããã«ãã ```rp.hbs``` ã¯å»æ­¢ï¼
- package.json ã®æ´æ°ï¼@babel/core, @babel/plugin-transform-classes, @babel/preset-env, autoprefixer, glob, handlebars, webpack-cliï¼
- README.md ã®å¤æ´

### v0.0.5ï¼2019å¹´10æ11æ¥ï¼

- handlebars ã«ã¦ if ãæ¡å¼µãããã«ãã¼é¢æ°ãè¿½å ï¼if_eqï¼
- HTMLã§ä½¿ç¨ãã¦ãªãè¦ç´ ã®ã¹ã¿ã¤ã«ãèªåã§åé¤ãã¦ãããæ©è½ãè¿½å 
- package.json ã«è¿½å ï¼gulp-purgecssï¼
- package.json ã®æ´æ°ï¼@babel/core, @babel/preset-env, autoprefixer, gulp-changed, handlebars, image-size, webpack, webpack-cliï¼
- README.md ã®å¤æ´

### v0.0.4ï¼2019å¹´9æ15æ¥ï¼

- webpack.config.js ã®ãªãã·ã§ã³ã« cacheDirectory: true ãè¿½å 
- package.json ã®æ´æ°ï¼@babel/core, @babel/preset-env, del, handlebars, webpack, webpack-cli, webpack-mergeï¼
- README.md ã®å¤æ´

### v0.0.3ï¼2019å¹´8æ20æ¥ï¼

- node-sass-functions ã®ä¸é¨ã­ã¸ãã¯ã®æ¹ä¿®
- package.json ã®æ´æ°ï¼directory-tree, gulp-changed, webpack,webpack-cliï¼
- README.md ã®å¤æ´

### v0.0.2ï¼2019å¹´8æ16æ¥ï¼

- Webpack 4.38.0 ã 4.39.1 ã¸æ´æ°
- package.json ã«ã¦ Node.js ã® Engine ã 8.3.x ä»¥ä¸ã«å¤æ´
- ä¸è¨ã«ä¼´ã .node-version ã Git ã«å«ã¾ãªãããã«å¤æ´
- README.md ã®å¤æ´

### v0.0.1ï¼2019å¹´8æ10æ¥ï¼

- ååãªãªã¼ã¹

### v0.0.0ï¼2019å¹´7æ12æ¥ï¼

- éçºã¹ã¿ã¼ã

## ð License
Copyright (c) 2019 GlitchWorker (http://loxis.jp/)  
Licensed under the MIT license.