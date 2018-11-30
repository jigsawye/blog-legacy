webpackJsonp([0x671083b522d5],{446:function(e,n){e.exports={data:{site:{siteMetadata:{title:"JIGSAWYE",author:"Evan Ye"}},markdownRemark:{id:"/Users/jigsawye/projects/gatsby-blog/content/posts/2015-09-25-gitlab-ce-in-docker.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>更新於 2017/1/10：此文年久失修，可能有許多情形與現實不符，請斟酌參考。</p>\n</blockquote>\n<blockquote>\n<p>本文建議了解 unix-like 基礎指令及 Docker 基本操作者閱讀。</p>\n</blockquote>\n<p>這幾天在我們的 imaclab 試著建置 CI 環境，順便就學了 Docker，發現 Docker 這東西真的非常方便，直接把環境都放進 container 裡，也不怕把環境搞爛。對環境建置的苦手真的是一番福音，網路上也很多關於 Docker 的文章，在這邊也不贅述了。\n原本在架設的時候想使用 Gitlab + Jenkins，不過因專案的需求沒有需要 Jenkins 這麼開放客製化的 CI 工具（其實是我覺得很囉唆一堆東西要設定），剛好 Gitlab 也有提供 CI，需求上也符合，所以就決定使用 Gitlab + Gitlab CI。</p>\n<!-- more -->\n<!-- toc -->\n<h3 id="gitlab"><a href="#gitlab" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gitlab</h3>\n<p>以自行架設私有的版本控制環境來說，Gitlab 肯定是首選（因為我不知道還有哪些版控可以自己架），很久以前曾經自己在 ubuntu 上用官方提供的一鍵安裝包裝過一次，用過這種懶人包的都知道，裝的時候完全不知道發生什麼事，尤其當時還很菜。那時是成功架起來沒錯，不過完全不知道發生了什麼事。</p>\n<h6 id="環境"><a href="#%E7%92%B0%E5%A2%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>環境</h6>\n<p>我是直接用了學長架的 OpenStack 叢集開一個 instance 當建置環境，基本上要照這份筆記安裝 Gitlab CE，應該只要隨便一個有裝 Docker 的 unix-like 系統都可以。</p>\n<p>{% asset_img 01.png %}</p>\n<h6 id="安裝"><a href="#%E5%AE%89%E8%A3%9D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安裝</h6>\n<p>透過 Docker 安裝 Gitlab CE 很簡單，只要在 <a href="https://hub.docker.com">Docker Hub</a> 上找 gitlab 就可以找到很多的 images，我選了 star 最多的 <a href="https://hub.docker.com/r/sameersbn/gitlab/">sameersbn/gitlab</a> ，基本上只要照 image 的文件做就可以了。</p>\n<p>首先將 <code class="language-text">sameersbn/gitlab</code> 的 image pull 下來。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker pull sameersbn/gitlab:8.0.2</code></pre>\n      </div>\n<p>接著有兩種方式可以啟動 Gitlab：最簡單的是使用 <code class="language-text">docker-compose</code>，透過設定檔啟動。另外就是手動執行 <code class="language-text">docker run</code> 指令將 gitlab 所需的 service 逐一啟動。這邊我選擇後者，因為我沒裝 docker-compose，未來有安裝在補充這部分的使用方式。</p>\n<p>除了 Gitlab 本身，他還需要額外啟用 <code class="language-text">PostgreSQL</code> 及 <code class="language-text">Redis</code> 的 servcie，基本上只要按照文件啟動 container 就可以了：</p>\n<p>啟動 PostgreSQL container：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run --name gitlab-postgresql -d \\\n    --env <span class="token string">\'DB_NAME=gitlabhq_production\'</span> \\\n    --env <span class="token string">\'DB_USER=gitlab\'</span> --env <span class="token string">\'DB_PASS=password\'</span> \\\n    --volume /srv/docker/gitlab/postgresql:/var/lib/postgresql \\\n    sameersbn/postgresql:9.4-3</code></pre>\n      </div>\n<p>啟動 Redis container：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run --name gitlab-redis -d \\\n    --volume /srv/docker/gitlab/redis:/var/lib/redis \\\n    sameersbn/redis:latest</code></pre>\n      </div>\n<p>最後啟動 Gitlab container。這邊要注意我除了照原文件之外，還額外加上 <code class="language-text">GITLAB_HOST</code>，因為我的建置環境不在本機上，所以要加上該環境的 ip，否則 user 的大頭貼會是死圖。另外指令中的 <code class="language-text">long-and-random-alpha-numeric-string</code> 請替換成一組隨機字串，可以使用 <code class="language-text">pwgen -Bsv1 64</code> 來產生：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run --name gitlab -d \\\n    --link gitlab-postgresql:postgresql --link gitlab-redis:redisio \\\n    --publish 10022:22 --publish 10080:80 \\\n    --env <span class="token string">\'GITLAB_HOST=your-gitlab-ip\'</span> \\\n    --env <span class="token string">\'GITLAB_PORT=10080\'</span> --env <span class="token string">\'GITLAB_SSH_PORT=10022\'</span> \\\n    --env <span class="token string">\'GITLAB_SECRETS_DB_KEY_BASE=long-and-random-alpha-numeric-string\'</span> \\\n    --volume /srv/docker/gitlab/gitlab:/home/git/data \\\n    sameersbn/gitlab:8.0.2</code></pre>\n      </div>\n<h6 id="完成！"><a href="#%E5%AE%8C%E6%88%90%EF%BC%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>完成！</h6>\n<p>{% asset_img 02.png %}</p>\n<p>打開瀏覽器瀏覽 <code class="language-text">http://your-gitlab-ip:10080</code>，就可以看到 Gitlab 架設好了，輸入預設的帳號密碼就可以直接登入：</p>\n<ul>\n<li>username: <strong>root</strong></li>\n<li>password: <strong>5iveL!fe</strong></li>\n</ul>\n<h3 id="gitlab-ci"><a href="#gitlab-ci" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gitlab CI</h3>\n<p>這次安裝的時候原本第一天裝 Gitlab CE 7.14.3，Gitlab CI 還要另外做安裝，後來更新到 8.0.0 的時候 Gitlab 把 CI 整合進了 Gitlab CE 裡，所以只需要裝 Gitlab CE 就包含了 CI 的功能了！兩個願望一次滿足！</p>\n<p>以下以簡單的 Node.js project 為例，做一次完整的 CI Flow：</p>\n<h6 id="建立-repository"><a href="#%E5%BB%BA%E7%AB%8B-repository" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>建立 repository</h6>\n<p>首先在 Gitlab 上建立一個 <code class="language-text">ci-flow</code> 的 repository：</p>\n<p>{% asset_img 03.png %}</p>\n<p>接著點選 CI 選項，點選 <strong>Add project to CI</strong> 將剛剛建立的 <code class="language-text">ci-flow</code> 加入至 CI 中：</p>\n<p>{% asset_img 04.png %}</p>\n<p>點選 runner 分頁，記下 url 及 token：</p>\n<p>{% asset_img 05.png %}</p>\n<h6 id="gitlab-runner"><a href="#gitlab-runner" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>gitlab-runner</h6>\n<p>什麼是 <code class="language-text">gitlab-runner</code> 呢？簡單來說就是透過這個 runner 去執行 CI 所要執行的工作。例如我以 docker 做測試環境，runner 會建立預先設定好 image 的 container，CI 被觸發時會自動 start 該 container，並把 repository pull 至 container 內，接著執行指定的動作。在這部分我們要安裝及設定 <code class="language-text">gitlab-runner</code>，並註冊讓它執行。</p>\n<p>透過 Docker 安裝 gitlab-runner，參考<a href="https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/docker.md">官方文件</a>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run -d --name gitlab-runner --restart always \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v /srv/gitlab-runner/config:/etc/gitlab-runner \\\n  gitlab/gitlab-runner:latest</code></pre>\n      </div>\n<p>執行 gitlab-runner 進行註冊，這邊的 url 及 token 就是剛剛 runner 分頁對應的資料。其餘部分根據需求做選擇，像我不需要 DB 的 Service 所以一律 enter 略過：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker <span class="token function">exec</span> -it gitlab-runner gitlab-runner register\n\nPlease enter the gitlab-ci coordinator URL <span class="token punctuation">(</span>e.g. https://gitlab.com/ci <span class="token punctuation">)</span>\nhttps://your-gitlab-ip:10080/ci\n\nPlease enter the gitlab-ci token <span class="token keyword">for</span> this runner\nyour-gitlab-ci-token\n\nPlease enter the gitlab-ci description <span class="token keyword">for</span> this runner\n<span class="token punctuation">[</span>86598ea6394b<span class="token punctuation">]</span>: node-4.1.1\n\nINFO<span class="token punctuation">[</span>0034<span class="token punctuation">]</span> 08cc0e60 Registering runner<span class="token punctuation">..</span>. succeeded\nPlease enter the executor: docker, docker-ssh, ssh, shell, parallels:\n<span class="token punctuation">[</span>shell<span class="token punctuation">]</span>: docker\n\nPlease enter the Docker image <span class="token punctuation">(</span>eg. ruby:2.1<span class="token punctuation">)</span>:\nnode:4.1.1\n\nIf you want to <span class="token function">enable</span> mysql please enter version <span class="token punctuation">(</span>X.Y<span class="token punctuation">)</span> or enter latest?\n\nIf you want to <span class="token function">enable</span> postgres please enter version <span class="token punctuation">(</span>X.Y<span class="token punctuation">)</span> or enter latest?\n\nIf you want to <span class="token function">enable</span> redis please enter version <span class="token punctuation">(</span>X.Y<span class="token punctuation">)</span> or enter latest?\n\nIf you want to <span class="token function">enable</span> mongo please enter version <span class="token punctuation">(</span>X.Y<span class="token punctuation">)</span> or enter latest?\n\nINFO<span class="token punctuation">[</span>0045<span class="token punctuation">]</span> Runner registered successfully. Feel <span class="token function">free</span> to start it, but <span class="token keyword">if</span> it\'s running already the config should be automatically reloaded<span class="token operator">!</span></code></pre>\n      </div>\n<p>現在前往 CI 的 runner 分頁應該就會看到 node-4.1.1 並且是 active 的。</p>\n<p>{% asset_img 06.png %}</p>\n<blockquote>\n<p>注意，這邊我們要編輯 node-4.1.1 這個 runner，並增加名為 node-4.1.1 的 tag 讓 CI 能夠啟動對應的 runner。</p>\n</blockquote>\n<p>{% asset_img 07.png %}</p>\n<h6 id="建立-project"><a href="#%E5%BB%BA%E7%AB%8B-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>建立 project</h6>\n<p>建立一個 project，並使用 <code class="language-text">npm init</code>（enter 到底就可以了）產生 <code class="language-text">package.json</code>，接著安裝 node.js 的測試工具 <code class="language-text">mocha</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">mkdir</span> ci-flow\n<span class="token function">cd</span> ci-flow\n<span class="token function">npm</span> init\n<span class="token function">npm</span> <span class="token function">install</span> mocha --save-dev</code></pre>\n      </div>\n<p>接著建立檔案 <code class="language-text">test/test.js</code> 並撰寫簡單的測試程式：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js test/test.js"><code class="language-js test/test.js">var assert = require(&#39;assert&#39;);\n\ndescribe(&#39;Array&#39;, function() {\n  describe(&#39;#indexOf()&#39;, function() {\n    it(&#39;should return -1 when the value is not present&#39;, function() {\n      assert.equal(-1, [1, 2, 3].indexOf(5));\n      assert.equal(-1, [1, 2, 3].indexOf(0));\n    });\n  });\n});</code></pre>\n      </div>\n<p>寫完測試當然要在 local 測試一下，直接執行 project 中安裝的 <code class="language-text">./node_modules/mocha/bin/mocha</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ ./node_modules/mocha/bin/mocha\n\n  Array\n    <span class="token comment">#indexOf()</span>\n      ✓ should <span class="token keyword">return</span> -1 when the value is not present\n\n\n  1 passing <span class="token punctuation">(</span>9ms<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>測試成功！接著我們來設定 CI 所要使用的 image 及執行的 script。</p>\n<h6 id="gitlab-ciyml"><a href="#gitlab-ciyml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>.gitlab-ci.yml</h6>\n<p>重點來了，我們要在專案的根目錄建立 <code class="language-text">.gitlab-ci.yml</code> 的檔案，用於決定 Gitlab CI 要如何對專案 build、test、deploy…等等，類似於 Travis CI 的 <code class="language-text">.travis.yml</code>。詳細的可用選項可以參考<a href="http://doc.gitlab.com/ci/yaml/README.html">官方文件</a>，這邊以我的例子做解說：\n<code class="language-text">before_script</code> 是執行 job 前會執行的 script，我在這邊設定安裝 node 的 dependencies，也就是 <code class="language-text">mocha</code> 這個 test tool。<code class="language-text">stages</code> 為設定有幾種工作階段，一般可能就會有 <code class="language-text">build</code>、<code class="language-text">test</code>、<code class="language-text">deploy</code>，並按照順序逐一執行對應的 job，我這邊單獨以 <code class="language-text">test</code> 做例子。接著制定第一個 job，對應的就是 <code class="language-text">test</code> 這個 stage，在 <code class="language-text">script</code> 增加執行 project 內的 <code class="language-text">mocha</code> 做測試，並指在 <code class="language-text">master</code> 這個 branch，最後加上一個 <code class="language-text">node-4.1.1</code> 的 tag 去啟動對應 tag 為 <code class="language-text">node-4.1.1</code> 的 <code class="language-text">gitlab-runner</code>，因為一般在測試時可能會針對多個不同版本的環境做測試，所以會使用 tag 這個功能來做設定。</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby .gitlab-ci.yml"><code class="language-ruby .gitlab-ci.yml">before_script:\n  - npm install\nstages:\n  - test\njob1:\n  stage: test\n  script:\n    - ./node_modules/mocha/bin/mocha\n  only:\n    - master\n  tags:\n    - node-4.1.1</code></pre>\n      </div>\n<p>在版本控制上並不希望 <code class="language-text">node_modules</code> 放入版本控制中，所以增加 <code class="language-text">.gitignore</code> 檔案並排除該目錄：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">touch</span> .gitignore\n<span class="token keyword">echo</span> node_modules <span class="token operator">></span> .gitignore</code></pre>\n      </div>\n<p>加入版本控制：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> init\n<span class="token function">git</span> add <span class="token keyword">.</span>\n<span class="token function">git</span> commit -m <span class="token string">\'Test gitlab-ci with &lt;3\'</span></code></pre>\n      </div>\n<p>Push 至 Repository：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> remote add origin your-project-repository\n<span class="token function">git</span> push -u origin master</code></pre>\n      </div>\n<p>最後等待 CI 自動執行測試！</p>\n<h6 id="執行結果"><a href="#%E5%9F%B7%E8%A1%8C%E7%B5%90%E6%9E%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>執行結果</h6>\n<p>Push 至 Repository 後可以在 CI 的 Dashboard 看見剛剛的 commit 已經 pending 了：</p>\n<p>{% asset_img 08.png %}</p>\n<p>點進去後可以看到目前須執行的所有 job，根據你的 <code class="language-text">.gitlab-ci.yml</code> 而定，一般來說會在多個環境測試，並包含 deploy 等多種不同的 job：</p>\n<p>{% asset_img 09.png %}</p>\n<p>等待一段時間後就成功就會顯示 Success：</p>\n<p>{% asset_img 10.png %}</p>\n<p>你也可以點進 build 中看執行的結果：</p>\n<p>{% asset_img 11.png %}</p>\n<h6 id="slack-integration"><a href="#slack-integration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Slack Integration</h6>\n<p>Gitlab CI 也有提供 Slack 的整合，提供即時的 CI 狀態，只要填入 Webhook 即可：</p>\n<p>{% asset_img 12.png %}</p>\n<h3 id="總結"><a href="#%E7%B8%BD%E7%B5%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>總結</h3>\n<p>搞了三天左右都在學 Docker 跟弄這些環境，在精疲力乏與中秋烤肉之際順便記錄一下過程。\n文中一些細節可以在根據需求做修改，像是在 test 的 docker image 就可以把 <code class="language-text">mocha</code> 裝進去，不用在 project 中額外安裝。Gitlab 的 CI 雖然不像 Jenkins CI 那麼容易的客製化，但是基本的功能也能滿足一些需求。當然 Gitlab CI 的功能我可能也沒完全摸透，可能有更強大的功能也說不定。</p>\n<p>另外未來還會串上 CD，另外加開一台 staging 的 instance 來 deploy，之後若串起來有空再寫下一篇分享。</p>',frontmatter:{title:"使用 Docker 建置 Gitlab CE 的 Source Control 及 CI 環境",date:"September 25, 2015"}}},pathContext:{slug:"/2015/09/25/gitlab-ce-in-docker/"}}}});
//# sourceMappingURL=path---2015-09-25-gitlab-ce-in-docker-fcdfd48f11f57d3d9ab6.js.map