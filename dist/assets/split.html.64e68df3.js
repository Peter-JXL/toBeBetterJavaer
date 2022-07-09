import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as l,a as n,b as a,e as t,d as p}from"./app.68c5e420.js";const i={},u=t(`<h1 id="\u5982\u4F55\u5728java\u4E2D\u4F18\u96C5\u5730\u5206\u5272string\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728java\u4E2D\u4F18\u96C5\u5730\u5206\u5272string\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5982\u4F55\u5728Java\u4E2D\u4F18\u96C5\u5730\u5206\u5272String\u5B57\u7B26\u4E32\uFF1F</h1><p>\u201C\u54E5\uFF0C\u6211\u611F\u89C9\u5B57\u7B26\u4E32\u62C6\u5206\u6CA1\u4EC0\u4E48\u53EF\u8BB2\u7684\u5440\uFF0C\u76F4\u63A5\u4E0A String \u7C7B\u7684 <code>split()</code> \u65B9\u6CD5\u4E0D\u5C31\u53EF\u4EE5\u4E86\uFF01\u201D\u4E09\u59B9\u6BEB\u4E0D\u5BA2\u6C14\u5730\u8BF4\u3002</p><p>\u201C\u5047\u5982\u4F60\u771F\u7684\u8FD9\u4E48\u89C9\u5F97\uFF0C\u90A3\u53EF\u8981\u6CE8\u610F\u4E86\uFF0C\u4E8B\u60C5\u8FDC\u6CA1\u8FD9\u4E48\u7B80\u5355\u3002\u201D\u6211\u5FAE\u7B11\u7740\u8BF4\u3002</p><p>\u5047\u5982\u73B0\u5728\u6709\u8FD9\u6837\u4E00\u4E32\u5B57\u7B26\u5E8F\u5217\u201C\u6C89\u9ED8\u738B\u4E8C\uFF0C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458\u201D\uFF0C\u9700\u8981\u6309\u7167\u4E2D\u6587\u9017\u53F7\u201C\uFF0C\u201D\u8FDB\u884C\u62C6\u5206\uFF0C\u8FD9\u610F\u5473\u7740\u7B2C\u4E00\u4E32\u5B57\u7B26\u5E8F\u5217\u4E3A\u9017\u53F7\u524D\u9762\u7684\u201C\u6C89\u9ED8\u738B\u4E8C\u201D\uFF0C\u7B2C\u4E8C\u4E32\u5B57\u7B26\u5E8F\u5217\u4E3A\u9017\u53F7\u540E\u9762\u7684\u201C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458\u201D\u3002</p><p>\u201C\u8FD9\u4E0D\u7B49\u4E8E\u6CA1\u8BF4\u5417\uFF1F\u54E5\uFF01\u201D\u8FD8\u6CA1\u7B49\u6211\u8BF4\uFF0C\u4E09\u59B9\u5C31\u6253\u65AD\u4E86\u6211\u3002</p><p>\u201C\u522B\u7740\u6025\u561B\uFF0C\u7B49\u54E5\u8BF4\u5B8C\u3002\u201D\u6211\u4F9D\u7136\u4FDD\u6301\u7740\u5FAE\u7B11\u7EE7\u7EED\u8BF4\uFF0C\u201C\u5728\u62C6\u5206\u4E4B\u524D\uFF0C\u8981\u5148\u8FDB\u884C\u68C0\u67E5\uFF0C\u5224\u65AD\u4E00\u4E0B\u8FD9\u4E32\u5B57\u7B26\u662F\u5426\u5305\u542B\u9017\u53F7\uFF0C\u5426\u5219\u5E94\u8BE5\u629B\u51FA\u5F02\u5E38\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C\uFF0C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; \u7B2C\u4E8C\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u5B57\u7B26\u4E32\u6CA1\u6709\u5305\u542B\u9017\u53F7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u4E09\u59B9\u4F60\u770B\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u633A\u4E25\u8C28\u7684\u5427\uFF1F\u201D\u6211\u8BF4\uFF0C\u201C\u6765\u770B\u4E00\u4E0B\u7A0B\u5E8F\u7684\u8F93\u51FA\u7ED3\u679C\u3002\u201D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u90E8\u5206\uFF1A\u6C89\u9ED8\u738B\u4E8C \u7B2C\u4E8C\u90E8\u5206\uFF1A\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C\u7684\u786E\u548C\u9884\u671F\u5B8C\u5168\u4E00\u81F4\u3002\u201D\u4E09\u59B9\u8BF4\u3002</p><p>\u201C\u8FD9\u662F\u5EFA\u7ACB\u5728\u5B57\u7B26\u4E32\u662F\u786E\u5B9A\u7684\u60C5\u51B5\u4E0B\uFF0C\u6700\u91CD\u8981\u7684\u662F\u5206\u9694\u7B26\u662F\u786E\u5B9A\u7684\u3002\u5426\u5219\uFF0C\u9EBB\u70E6\u5C31\u6765\u4E86\u3002\u201D\u6211\u8BF4\uFF0C\u201C\u5927\u7EA6\u6709 12 \u79CD\u82F1\u6587\u7279\u6B8A\u7B26\u53F7\uFF0C\u5982\u679C\u76F4\u63A5\u62FF\u8FD9\u4E9B\u7279\u6B8A\u7B26\u53F7\u66FF\u6362\u4E0A\u9762\u4EE3\u7801\u4E2D\u7684\u5206\u9694\u7B26\uFF08\u4E2D\u6587\u9017\u53F7\uFF09\uFF0C\u8FD9\u6BB5\u7A0B\u5E8F\u5728\u8FD0\u884C\u7684\u65F6\u5019\u5C31\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u63D0\u5230\u7684\u9519\u8BEF\u3002\u201D</p><ul><li>\u53CD\u659C\u6760 <code>\\</code>\uFF08ArrayIndexOutOfBoundsException\uFF09</li><li>\u63D2\u5165\u7B26\u53F7 <code>^</code>\uFF08\u540C\u4E0A\uFF09</li><li>\u7F8E\u5143\u7B26\u53F7 <code>$</code>\uFF08\u540C\u4E0A\uFF09</li><li>\u9017\u70B9 <code>.</code>\uFF08\u540C\u4E0A\uFF09</li><li>\u7AD6\u7EBF <code>|</code>\uFF08\u6B63\u5E38\uFF0C\u6CA1\u6709\u51FA\u9519\uFF09</li><li>\u95EE\u53F7 <code>?</code>\uFF08PatternSyntaxException\uFF09</li><li>\u661F\u53F7 <code>*</code>\uFF08\u540C\u4E0A\uFF09</li><li>\u52A0\u53F7 <code>+</code>\uFF08\u540C\u4E0A\uFF09</li><li>\u5DE6\u5C0F\u62EC\u53F7\u6216\u8005\u53F3\u5C0F\u62EC\u53F7 <code>()</code>\uFF08\u540C\u4E0A\uFF09</li><li>\u5DE6\u65B9\u62EC\u53F7\u6216\u8005\u53F3\u65B9\u62EC\u53F7 <code>[]</code>\uFF08\u540C\u4E0A\uFF09</li><li>\u5DE6\u5927\u62EC\u53F7\u6216\u8005\u53F3\u5927\u62EC\u53F7 <code>{}</code>\uFF08\u540C\u4E0A\uFF09</li></ul><p>\u201C\u90A3\u9047\u5230\u8FD9\u4E9B\u7279\u6B8A\u7B26\u53F7\u8BE5\u600E\u4E48\u529E\u5462\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u201D\u6211\u8BF4\uFF0C\u201C\u6B63\u5219\u8868\u8FBE\u5F0F\u662F\u4E00\u7EC4\u7531\u5B57\u6BCD\u548C\u7B26\u53F7\u7EC4\u6210\u7684\u7279\u6B8A\u6587\u672C\uFF0C\u5B83\u53EF\u4EE5\u7528\u6765\u4ECE\u6587\u672C\u4E2D\u627E\u51FA\u6EE1\u8DB3\u4F60\u60F3\u8981\u7684\u683C\u5F0F\u7684\u53E5\u5B50\u3002\u201D</p><p>\u6211\u5728 GitHub \u4E0A\u627E\u6253\u4E86\u4E00\u4E2A\u5F00\u6E90\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5B66\u4E60\u6587\u6863\uFF0C\u975E\u5E38\u8BE6\u7EC6\u3002\u4E00\u5F00\u59CB\u5199\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u65F6\u5019\u96BE\u514D\u4F1A\u611F\u89C9\u5230\u975E\u5E38\u751F\u758F\uFF0C\u4F60\u53EF\u4EE5\u67E5\u770B\u4E00\u4E0B\u8FD9\u4EFD\u6587\u6863\u3002\u8BB0\u4E0D\u4F4F\u6CA1\u5173\u7CFB\uFF0C\u9047\u5230\u5C31\u67E5\u3002</p>`,15),r={href:"https://github.com/cdoco/learn-regex-zh",target:"_blank",rel:"noopener noreferrer"},k=p("https://github.com/cdoco/learn-regex-zh"),d=n("p",null,"\u9664\u4E86\u8FD9\u4EFD\u6587\u6863\uFF0C\u8FD8\u6709\u4E00\u4EFD\uFF1A",-1),v={href:"https://github.com/cdoco/common-regex",target:"_blank",rel:"noopener noreferrer"},m=p("https://github.com/cdoco/common-regex"),g=t(`<p>\u4F5C\u8005\u6536\u96C6\u4E86\u4E00\u4E9B\u5728\u5E73\u65F6\u9879\u76EE\u5F00\u53D1\u4E2D\u7ECF\u5E38\u7528\u5230\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u7528\u3002</p><p>\u201C\u54E5\uFF0C\u4F60\u771F\u5468\u5230\u3002\u201D\u4E09\u59B9\u7B11\u7740\u8BF4\u3002</p><p>\u201C\u597D\u4E86\uFF0C\u6765\u7528\u82F1\u6587\u9017\u70B9 <code>.</code> \u66FF\u6362\u4E00\u4E0B\u5206\u9694\u7B26\u3002\u201D\u6211\u8BF4\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C.\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; \u7B2C\u4E8C\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u82F1\u6587\u9017\u70B9\u5C5E\u4E8E\u7279\u6B8A\u7B26\u53F7\uFF0C\u6240\u4EE5\u5728\u4F7F\u7528 <code>split()</code> \u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F <code>\\\\.</code> \u800C\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528 <code>.</code>\u3002</p><p>\u201C\u4E3A\u4EC0\u4E48\u7528\u4E24\u4E2A\u53CD\u659C\u6760\u5462\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u56E0\u4E3A\u53CD\u659C\u6760\u672C\u8EAB\u5C31\u662F\u4E00\u4E2A\u7279\u6B8A\u5B57\u7B26\uFF0C\u9700\u8981\u7528\u53CD\u659C\u6760\u6765\u8F6C\u4E49\u3002\u201D\u6211\u8BF4\u3002</p><p>\u5F53\u7136\u4E86\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>[]</code> \u6765\u5305\u88F9\u4F4F\u82F1\u6587\u9017\u70B9\u201C.\u201D\uFF0C<code>[]</code> \u4E5F\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u6765\u5339\u914D\u65B9\u62EC\u53F7\u4E2D\u5305\u542B\u7684\u4EFB\u610F\u5B57\u7B26\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;[.]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9664\u6B64\u4E4B\u5916\uFF0C \u8FD8\u53EF\u4EE5\u4F7F\u7528 Pattern \u7C7B\u7684 <code>quote()</code> \u65B9\u6CD5\u6765\u5305\u88F9\u82F1\u6587\u9017\u70B9\u201C.\u201D\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u4F7F\u7528 <code>\\Q\\E</code> \u5305\u88F9\u7684\u5B57\u7B26\u4E32\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/split-01.png" alt=""></p><p>\u6765\u770B\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">quote</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53 <code>split()</code> \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u65F6\u5019\uFF0C\u65B9\u6CD5\u6700\u7EC8\u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u884C\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">return</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>regex<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u62C6\u5206\u5B57\u7B26\u4E32\u6709\u4E86\u65B0\u7684\u9009\u62E9\uFF0C\u53EF\u4EE5\u4E0D\u4F7F\u7528 String \u7C7B\u7684 <code>split()</code> \u65B9\u6CD5\uFF0C\u76F4\u63A5\u7528\u4E0B\u9762\u7684\u65B9\u5F0F\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPatternSplit</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Pattern</span> twopart <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> twopart<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C.\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; \u7B2C\u4E8C\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u201C\u4E3A\u4EC0\u4E48\u8981\u628A Pattern \u8868\u8FBE\u5F0F\u58F0\u660E\u79F0 static \u7684\u5462\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u7531\u4E8E\u6A21\u5F0F\u662F\u786E\u5B9A\u7684\uFF0C\u901A\u8FC7 static \u7684\u9884\u7F16\u8BD1\u529F\u80FD\u53EF\u4EE5\u63D0\u9AD8\u7A0B\u5E8F\u7684\u6548\u7387\u3002\u201D\u6211\u8BF4\uFF0C\u201C\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 Pattern \u914D\u5408 Matcher \u7C7B\u8FDB\u884C\u5B57\u7B26\u4E32\u62C6\u5206\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u53EF\u4EE5\u5BF9\u8981\u62C6\u5206\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u4E00\u4E9B\u4E25\u683C\u7684\u9650\u5236\uFF0C\u6765\u770B\u8FD9\u6BB5\u793A\u4F8B\u4EE3\u7801\u3002\u201D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPatternMatch</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4F7F\u7528\u9884\u7F16\u8BD1\u529F\u80FD\uFF0C\u63D0\u9AD8\u6548\u7387
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Pattern</span> twopart <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;(.+)\\\\.(.+)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C.\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token string">&quot;.\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">checkString</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Matcher</span> m <span class="token operator">=</span> twopart<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; \u7B2C\u4E8C\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> m<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u5339\u914D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B63\u5219\u8868\u8FBE\u5F0F <code>(.+)\\\\.(.+)</code> \u7684\u610F\u601D\u662F\uFF0C\u4E0D\u4EC5\u8981\u628A\u5B57\u7B26\u4E32\u6309\u7167\u82F1\u6587\u6807\u70B9\u7684\u65B9\u5F0F\u62C6\u6210\u4E24\u90E8\u5206\uFF0C\u5E76\u4E14\u82F1\u6587\u9017\u70B9\u7684\u524D\u540E\u8981\u6709\u5185\u5BB9\u3002</p><p>\u6765\u770B\u4E00\u4E0B\u7A0B\u5E8F\u7684\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u7B2C\u4E00\u90E8\u5206\uFF1A\u6C89\u9ED8\u738B\u4E8C \u7B2C\u4E8C\u90E8\u5206\uFF1A\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458
\u4E0D\u5339\u914D
\u4E0D\u5339\u914D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\uFF0C\u4F7F\u7528 Matcher \u6765\u5339\u914D\u4E00\u4E9B\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u65F6\u76F8\u5BF9\u6BD4\u8F83\u6C89\u91CD\u4E00\u4E9B\uFF0C\u4F7F\u7528 String \u7C7B\u7684 <code>split()</code> \u4ECD\u7136\u662F\u9996\u9009\uFF0C\u56E0\u4E3A\u8BE5\u65B9\u6CD5\u8FD8\u6709\u5176\u4ED6\u4E00\u4E9B\u725B\u903C\u7684\u529F\u80FD\u3002\u6BD4\u5982\u8BF4\uFF0C\u5982\u679C\u4F60\u60F3\u628A\u5206\u9694\u7B26\u5305\u88F9\u5728\u62C6\u5206\u540E\u7684\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u90E8\u5206\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C\uFF0C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;(?&lt;=\uFF0C)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; \u7B2C\u4E8C\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u8F93\u51FA\u7684\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u90E8\u5206\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C \u7B2C\u4E8C\u90E8\u5206\uFF1A\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u5206\u9694\u7B26\u201C\uFF0C\u201D\u5305\u88F9\u5728\u4E86\u7B2C\u4E00\u90E8\u5206\uFF0C\u5982\u679C\u5E0C\u671B\u5305\u88F9\u5728\u7B2C\u4E8C\u90E8\u5206\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;(?=\uFF0C)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C<code>?&lt;=</code> \u548C <code>?=</code> \u662F\u4EC0\u4E48\u4E1C\u4E1C\u554A\uFF1F\u201D\u4E09\u59B9\u597D\u5947\u5730\u95EE\u3002</p><p>\u201C\u5B83\u5176\u5B9E\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u7684\u65AD\u8A00\u6A21\u5F0F\u3002\u201D\u6211\u8BF4\uFF0C\u201C\u4F60\u6709\u65F6\u95F4\u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u770B\u524D\u9762\u6211\u63A8\u8350\u7684\u4E24\u4EFD\u5F00\u6E90\u6587\u6863\u3002\u201D</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/split-02.png" alt=""></p><p>\u201C<code>split()</code> \u65B9\u6CD5\u53EF\u4EE5\u4F20\u9012 2 \u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u4E3A\u5206\u9694\u7B26\uFF0C\u7B2C\u4E8C\u4E2A\u4E3A\u62C6\u5206\u7684\u5B57\u7B26\u4E32\u4E2A\u6570\u3002\u201D\u6211\u8BF4\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C\uFF0C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458\uFF0C\u5BA0\u7231\u4ED6&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cmower<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> parts <span class="token operator">=</span> cmower<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\uFF0C&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span><span class="token string">&quot; \u7B2C\u4E8C\u90E8\u5206\uFF1A&quot;</span> <span class="token operator">+</span> parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDB\u5165 debug \u6A21\u5F0F\u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/split-03.png" alt=""></p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F20\u9012 2 \u4E2A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u4F1A\u76F4\u63A5\u8C03\u7528 <code>substring()</code> \u8FDB\u884C\u622A\u53D6\uFF0C\u7B2C\u4E8C\u4E2A\u5206\u9694\u7B26\u540E\u7684\u5C31\u4E0D\u518D\u62C6\u5206\u4E86\u3002</p><p>\u6765\u770B\u4E00\u4E0B\u7A0B\u5E8F\u8F93\u51FA\u7684\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u90E8\u5206\uFF1A\u6C89\u9ED8\u738B\u4E8C \u7B2C\u4E8C\u90E8\u5206\uFF1A\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458\uFF0C\u5BA0\u7231\u4ED6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u201C\u6CA1\u60F3\u5230\u554A\uFF0C\u8FD9\u4E2A\u5B57\u7B26\u4E32\u62C6\u5206\u8FD8\u633A\u8BB2\u7A76\u7684\u5440\uFF01\u201D\u4E09\u59B9\u611F\u6168\u5730\u8BF4\u3002</p><p>\u201C\u662F\u7684\uFF0C\u5176\u5B9E\u5B57\u7B26\u4E32\u62C6\u5206\u5728\u5B9E\u9645\u7684\u5DE5\u4F5C\u5F53\u4E2D\u8FD8\u662F\u633A\u7ECF\u5E38\u7528\u7684\u3002\u524D\u7AEF\u7ECF\u5E38\u4F1A\u6309\u7167\u89C4\u5219\u4F20\u9012\u4E00\u957F\u4E32\u5B57\u7B26\u5E8F\u5217\u5230\u540E\u7AEF\uFF0C\u540E\u7AEF\u5C31\u9700\u8981\u6309\u7167\u89C4\u5219\u628A\u5B57\u7B26\u4E32\u62C6\u5206\u518D\u505A\u5904\u7406\u3002\u201D\u6211\u8BF4\u3002</p><p>\u201C\u55EF\uFF0C\u6211\u628A\u4ECA\u5929\u7684\u5185\u5BB9\u6E29\u4E60\u4E0B\uFF0C\u4E8C\u54E5\uFF0C\u4F60\u4F11\u606F\u4F1A\u3002\u201D\u4E09\u59B9\u8BF4\u3002</p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png">`,43);function b(q,h){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[k,a(s)])])]),d,n("blockquote",null,[n("p",null,[n("a",v,[m,a(s)])])]),g])}var j=e(i,[["render",b],["__file","split.html.vue"]]);export{j as default};
