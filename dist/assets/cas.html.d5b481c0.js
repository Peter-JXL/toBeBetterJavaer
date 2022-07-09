import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c,a as n,b as s,e as l,d as e}from"./app.68c5e420.js";const i={},d=l(`<h1 id="java\u5B9E\u73B0cas\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#java\u5B9E\u73B0cas\u7684\u539F\u7406" aria-hidden="true">#</a> Java\u5B9E\u73B0CAS\u7684\u539F\u7406</h1><p>\u5728\u5E76\u53D1\u7F16\u7A0B\u4E2D\u6211\u4EEC\u90FD\u77E5\u9053<code>i++</code>\u64CD\u4F5C\u662F\u975E\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u8FD9\u662F\u56E0\u4E3A <code>i++</code>\u64CD\u4F5C\u4E0D\u662F\u539F\u5B50\u64CD\u4F5C\u3002</p><p>\u5982\u4F55\u4FDD\u8BC1\u539F\u5B50\u6027\u5462\uFF1F\u5E38\u7528\u7684\u65B9\u6CD5\u5C31\u662F<code>\u52A0\u9501</code>\u3002\u5728Java\u8BED\u8A00\u4E2D\u53EF\u4EE5\u4F7F\u7528 <code>synchronized</code>\u548C<code>CAS</code>\u5B9E\u73B0\u52A0\u9501\u6548\u679C\u3002</p><p><code>synchronized</code>\u662F\u60B2\u89C2\u9501\uFF0C\u7EBF\u7A0B\u5F00\u59CB\u6267\u884C\u7B2C\u4E00\u6B65\u5C31\u662F\u83B7\u53D6\u9501\uFF0C\u4E00\u65E6\u83B7\u5F97\u9501\uFF0C\u5176\u4ED6\u7684\u7EBF\u7A0B\u8FDB\u5165\u540E\u5C31\u4F1A\u963B\u585E\u7B49\u5F85\u9501\u3002\u5982\u679C\u4E0D\u597D\u7406\u89E3\uFF0C\u4E3E\u4E2A\u751F\u6D3B\u4E2D\u7684\u4F8B\u5B50\uFF1A\u4E00\u4E2A\u4EBA\u8FDB\u5165\u5395\u6240\u540E\u9996\u5148\u628A\u95E8\u9501\u4E0A\uFF08\u83B7\u53D6\u9501\uFF09\uFF0C\u7136\u540E\u5F00\u59CB\u4E0A\u5395\u6240\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6709\u5176\u4ED6\u4EBA\u6765\u4E86\u53EA\u80FD\u5728\u5916\u9762\u7B49\uFF08\u963B\u585E\uFF09\uFF0C\u5C31\u7B97\u518D\u6025\u4E5F\u6CA1\u7528\u3002\u4E0A\u5B8C\u5395\u6240\u5B8C\u4E8B\u540E\u628A\u95E8\u6253\u5F00\uFF08\u89E3\u9501\uFF09\uFF0C\u5176\u4ED6\u4EBA\u5C31\u53EF\u4EE5\u8FDB\u5165\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/cas-973e8804-c713-43f6-9a63-4b9f2be54f10.png" alt=""></p><p><code>CAS</code>\u662F\u4E50\u89C2\u9501\uFF0C\u7EBF\u7A0B\u6267\u884C\u7684\u65F6\u5019\u4E0D\u4F1A\u52A0\u9501\uFF0C\u5047\u8BBE\u6CA1\u6709\u51B2\u7A81\u53BB\u5B8C\u6210\u67D0\u9879\u64CD\u4F5C\uFF0C\u5982\u679C\u56E0\u4E3A\u51B2\u7A81\u5931\u8D25\u4E86\u5C31\u91CD\u8BD5\uFF0C\u6700\u540E\u76F4\u5230\u6210\u529F\u4E3A\u6B62\u3002</p><h2 id="\u4E50\u89C2\u9501\u4E0E\u60B2\u89C2\u9501\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E50\u89C2\u9501\u4E0E\u60B2\u89C2\u9501\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u4E50\u89C2\u9501\u4E0E\u60B2\u89C2\u9501\u7684\u6982\u5FF5</h2><p>\u9501\u53EF\u4EE5\u4ECE\u4E0D\u540C\u7684\u89D2\u5EA6\u5206\u7C7B\u3002\u5176\u4E2D\uFF0C\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u662F\u4E00\u79CD\u5206\u7C7B\u65B9\u5F0F\u3002</p><p><strong>\u60B2\u89C2\u9501\uFF1A</strong></p><p>\u60B2\u89C2\u9501\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684\u9501\u3002\u5BF9\u4E8E\u60B2\u89C2\u9501\u6765\u8BF4\uFF0C\u5B83\u603B\u662F\u8BA4\u4E3A\u6BCF\u6B21\u8BBF\u95EE\u5171\u4EAB\u8D44\u6E90\u65F6\u4F1A\u53D1\u751F\u51B2\u7A81\uFF0C\u6240\u4EE5\u5FC5\u987B\u5BF9\u6BCF\u6B21\u6570\u636E\u64CD\u4F5C\u52A0\u4E0A\u9501\uFF0C\u4EE5\u4FDD\u8BC1\u4E34\u754C\u533A\u7684\u7A0B\u5E8F\u540C\u4E00\u65F6\u95F4\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u5728\u6267\u884C\u3002</p><p><strong>\u4E50\u89C2\u9501\uFF1A</strong></p><p>\u4E50\u89C2\u9501\u53C8\u79F0\u4E3A\u201C\u65E0\u9501\u201D\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u662F\u4E50\u89C2\u6D3E\u3002\u4E50\u89C2\u9501\u603B\u662F\u5047\u8BBE\u5BF9\u5171\u4EAB\u8D44\u6E90\u7684\u8BBF\u95EE\u6CA1\u6709\u51B2\u7A81\uFF0C\u7EBF\u7A0B\u53EF\u4EE5\u4E0D\u505C\u5730\u6267\u884C\uFF0C\u65E0\u9700\u52A0\u9501\u4E5F\u65E0\u9700\u7B49\u5F85\u3002\u800C\u4E00\u65E6\u591A\u4E2A\u7EBF\u7A0B\u53D1\u751F\u51B2\u7A81\uFF0C\u4E50\u89C2\u9501\u901A\u5E38\u662F\u4F7F\u7528\u4E00\u79CD\u79F0\u4E3ACAS\u7684\u6280\u672F\u6765\u4FDD\u8BC1\u7EBF\u7A0B\u6267\u884C\u7684\u5B89\u5168\u6027\u3002</p><p>\u7531\u4E8E\u65E0\u9501\u64CD\u4F5C\u4E2D\u6CA1\u6709\u9501\u7684\u5B58\u5728\uFF0C\u56E0\u6B64\u4E0D\u53EF\u80FD\u51FA\u73B0\u6B7B\u9501\u7684\u60C5\u51B5\uFF0C\u4E5F\u5C31\u662F\u8BF4<strong>\u4E50\u89C2\u9501\u5929\u751F\u514D\u75AB\u6B7B\u9501</strong>\u3002</p><p>\u4E50\u89C2\u9501\u591A\u7528\u4E8E\u201C\u8BFB\u591A\u5199\u5C11\u201C\u7684\u73AF\u5883\uFF0C\u907F\u514D\u9891\u7E41\u52A0\u9501\u5F71\u54CD\u6027\u80FD\uFF1B\u800C\u60B2\u89C2\u9501\u591A\u7528\u4E8E\u201D\u5199\u591A\u8BFB\u5C11\u201C\u7684\u73AF\u5883\uFF0C\u907F\u514D\u9891\u7E41\u5931\u8D25\u548C\u91CD\u8BD5\u5F71\u54CD\u6027\u80FD\u3002</p><h2 id="cas\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#cas\u7684\u6982\u5FF5" aria-hidden="true">#</a> CAS\u7684\u6982\u5FF5</h2><p>CAS\u7684\u5168\u79F0\u662F\uFF1A\u6BD4\u8F83\u5E76\u4EA4\u6362\uFF08Compare And Swap\uFF09\u3002\u5728CAS\u4E2D\uFF0C\u6709\u8FD9\u6837\u4E09\u4E2A\u503C\uFF1A</p><ul><li>V\uFF1A\u8981\u66F4\u65B0\u7684\u53D8\u91CF(var)</li><li>E\uFF1A\u9884\u671F\u503C(expected)</li><li>N\uFF1A\u65B0\u503C(new)</li></ul><p>\u6BD4\u8F83\u5E76\u4EA4\u6362\u7684\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p>\u5224\u65ADV\u662F\u5426\u7B49\u4E8EE\uFF0C\u5982\u679C\u7B49\u4E8E\uFF0C\u5C06V\u7684\u503C\u8BBE\u7F6E\u4E3AN\uFF1B\u5982\u679C\u4E0D\u7B49\uFF0C\u8BF4\u660E\u5DF2\u7ECF\u6709\u5176\u5B83\u7EBF\u7A0B\u66F4\u65B0\u4E86V\uFF0C\u5219\u5F53\u524D\u7EBF\u7A0B\u653E\u5F03\u66F4\u65B0\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u505A\u3002</p><p>\u6240\u4EE5\u8FD9\u91CC\u7684<strong>\u9884\u671F\u503CE\u672C\u8D28\u4E0A\u6307\u7684\u662F\u201C\u65E7\u503C\u201D</strong>\u3002</p><p>\u6211\u4EEC\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u89E3\u91CA\u8FD9\u4E2A\u8FC7\u7A0B\uFF1A</p><ol><li>\u5982\u679C\u6709\u4E00\u4E2A\u591A\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u7684\u53D8\u91CF<code>i</code>\u539F\u672C\u7B49\u4E8E5\uFF0C\u6211\u73B0\u5728\u5728\u7EBF\u7A0BA\u4E2D\uFF0C\u60F3\u628A\u5B83\u8BBE\u7F6E\u4E3A\u65B0\u7684\u503C6;</li><li>\u6211\u4EEC\u4F7F\u7528CAS\u6765\u505A\u8FD9\u4E2A\u4E8B\u60C5\uFF1B</li><li>\u9996\u5148\u6211\u4EEC\u7528i\u53BB\u4E0E5\u5BF9\u6BD4\uFF0C\u53D1\u73B0\u5B83\u7B49\u4E8E5\uFF0C\u8BF4\u660E\u6CA1\u6709\u88AB\u5176\u5B83\u7EBF\u7A0B\u6539\u8FC7\uFF0C\u90A3\u6211\u5C31\u628A\u5B83\u8BBE\u7F6E\u4E3A\u65B0\u7684\u503C6\uFF0C\u6B64\u6B21CAS\u6210\u529F\uFF0C<code>i</code>\u7684\u503C\u88AB\u8BBE\u7F6E\u6210\u4E866\uFF1B</li><li>\u5982\u679C\u4E0D\u7B49\u4E8E5\uFF0C\u8BF4\u660E<code>i</code>\u88AB\u5176\u5B83\u7EBF\u7A0B\u6539\u8FC7\u4E86\uFF08\u6BD4\u5982\u73B0\u5728<code>i</code>\u7684\u503C\u4E3A2\uFF09\uFF0C\u90A3\u4E48\u6211\u5C31\u4EC0\u4E48\u4E5F\u4E0D\u505A\uFF0C\u6B64\u6B21CAS\u5931\u8D25\uFF0C<code>i</code>\u7684\u503C\u4ECD\u7136\u4E3A2\u3002</li></ol><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C<code>i</code>\u5C31\u662FV\uFF0C5\u5C31\u662FE\uFF0C6\u5C31\u662FN\u3002</p><p>\u90A3\u6709\u6CA1\u6709\u53EF\u80FD\u6211\u5728\u5224\u65AD\u4E86<code>i</code>\u4E3A5\u4E4B\u540E\uFF0C\u6B63\u51C6\u5907\u66F4\u65B0\u5B83\u7684\u65B0\u503C\u7684\u65F6\u5019\uFF0C\u88AB\u5176\u5B83\u7EBF\u7A0B\u66F4\u6539\u4E86<code>i</code>\u7684\u503C\u5462\uFF1F</p><p>\u4E0D\u4F1A\u7684\u3002\u56E0\u4E3ACAS\u662F\u4E00\u79CD\u539F\u5B50\u64CD\u4F5C\uFF0C\u5B83\u662F\u4E00\u79CD\u7CFB\u7EDF\u539F\u8BED\uFF0C\u662F\u4E00\u6761CPU\u7684\u539F\u5B50\u6307\u4EE4\uFF0C\u4ECECPU\u5C42\u9762\u4FDD\u8BC1\u5B83\u7684\u539F\u5B50\u6027</p><p><strong>\u5F53\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u4F7F\u7528CAS\u64CD\u4F5C\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u53EA\u6709\u4E00\u4E2A\u4F1A\u80DC\u51FA\uFF0C\u5E76\u6210\u529F\u66F4\u65B0\uFF0C\u5176\u4F59\u5747\u4F1A\u5931\u8D25\uFF0C\u4F46\u5931\u8D25\u7684\u7EBF\u7A0B\u5E76\u4E0D\u4F1A\u88AB\u6302\u8D77\uFF0C\u4EC5\u662F\u88AB\u544A\u77E5\u5931\u8D25\uFF0C\u5E76\u4E14\u5141\u8BB8\u518D\u6B21\u5C1D\u8BD5\uFF0C\u5F53\u7136\u4E5F\u5141\u8BB8\u5931\u8D25\u7684\u7EBF\u7A0B\u653E\u5F03\u64CD\u4F5C\u3002</strong></p><h2 id="java\u5B9E\u73B0cas\u7684\u539F\u7406-unsafe\u7C7B" tabindex="-1"><a class="header-anchor" href="#java\u5B9E\u73B0cas\u7684\u539F\u7406-unsafe\u7C7B" aria-hidden="true">#</a> Java\u5B9E\u73B0CAS\u7684\u539F\u7406 - Unsafe\u7C7B</h2><p>\u524D\u9762\u63D0\u5230\uFF0CCAS\u662F\u4E00\u79CD\u539F\u5B50\u64CD\u4F5C\u3002\u90A3\u4E48Java\u662F\u600E\u6837\u6765\u4F7F\u7528CAS\u7684\u5462\uFF1F\u6211\u4EEC\u77E5\u9053\uFF0C\u5728Java\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u65B9\u6CD5\u662Fnative\u7684\uFF0C\u90A3Java\u5C31\u4E0D\u8D1F\u8D23\u5177\u4F53\u5B9E\u73B0\u5B83\uFF0C\u800C\u662F\u4EA4\u7ED9\u5E95\u5C42\u7684JVM\u4F7F\u7528c\u6216\u8005c++\u53BB\u5B9E\u73B0\u3002</p><p>\u5728Java\u4E2D\uFF0C\u6709\u4E00\u4E2A<code>Unsafe</code>\u7C7B\uFF0C\u5B83\u5728<code>sun.misc</code>\u5305\u4E2D\u3002\u5B83\u91CC\u9762\u662F\u4E00\u4E9B<code>native</code>\u65B9\u6CD5\uFF0C\u5176\u4E2D\u5C31\u6709\u51E0\u4E2A\u5173\u4E8ECAS\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span><span class="token class-name">Object</span> expected<span class="token punctuation">,</span> <span class="token class-name">Object</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> <span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span><span class="token keyword">int</span> expected<span class="token punctuation">,</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> <span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span><span class="token keyword">long</span> expected<span class="token punctuation">,</span><span class="token keyword">long</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u4ED6\u4EEC\u90FD\u662F<code>public native</code>\u7684\u3002</p><p>Unsafe\u4E2D\u5BF9CAS\u7684\u5B9E\u73B0\u662FC++\u5199\u7684\uFF0C\u5B83\u7684\u5177\u4F53\u5B9E\u73B0\u548C\u64CD\u4F5C\u7CFB\u7EDF\u3001CPU\u90FD\u6709\u5173\u7CFB\u3002</p><p>Linux\u7684X86\u4E0B\u4E3B\u8981\u662F\u901A\u8FC7<code>cmpxchgl</code>\u8FD9\u4E2A\u6307\u4EE4\u5728CPU\u7EA7\u5B8C\u6210CAS\u64CD\u4F5C\u7684\uFF0C\u4F46\u5728\u591A\u5904\u7406\u5668\u60C5\u51B5\u4E0B\u5FC5\u987B\u4F7F\u7528<code>lock</code>\u6307\u4EE4\u52A0\u9501\u6765\u5B8C\u6210\u3002\u5F53\u7136\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u548C\u5904\u7406\u5668\u7684\u5B9E\u73B0\u4F1A\u6709\u6240\u4E0D\u540C\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u884C\u4E86\u89E3\u3002</p><p>\u5F53\u7136\uFF0CUnsafe\u7C7B\u91CC\u9762\u8FD8\u6709\u5176\u5B83\u65B9\u6CD5\u7528\u4E8E\u4E0D\u540C\u7684\u7528\u9014\u3002\u6BD4\u5982\u652F\u6301\u7EBF\u7A0B\u6302\u8D77\u548C\u6062\u590D\u7684<code>park</code>\u548C<code>unpark</code>\uFF0C LockSupport\u7C7B\u5E95\u5C42\u5C31\u662F\u8C03\u7528\u4E86\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u3002\u8FD8\u6709\u652F\u6301\u53CD\u5C04\u64CD\u4F5C\u7684<code>allocateInstance()</code>\u65B9\u6CD5\u3002</p><h2 id="\u539F\u5B50\u64CD\u4F5C-atomicinteger\u7C7B\u6E90\u7801\u7B80\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u5B50\u64CD\u4F5C-atomicinteger\u7C7B\u6E90\u7801\u7B80\u6790" aria-hidden="true">#</a> \u539F\u5B50\u64CD\u4F5C-AtomicInteger\u7C7B\u6E90\u7801\u7B80\u6790</h2><p>\u4E0A\u9762\u4ECB\u7ECD\u4E86Unsafe\u7C7B\u7684\u51E0\u4E2A\u652F\u6301CAS\u7684\u65B9\u6CD5\u3002\u90A3Java\u5177\u4F53\u662F\u5982\u4F55\u4F7F\u7528\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u6765\u5B9E\u73B0\u539F\u5B50\u64CD\u4F5C\u7684\u5462\uFF1F</p><p>JDK\u63D0\u4F9B\u4E86\u4E00\u4E9B\u7528\u4E8E\u539F\u5B50\u64CD\u4F5C\u7684\u7C7B\uFF0C\u5728<code>java.util.concurrent.atomic</code>\u5305\u4E0B\u9762\u3002\u5728JDK 11\u4E2D\uFF0C\u6709\u5982\u4E0B17\u4E2A\u7C7B\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/cas-f6a2281a-d322-4022-8c07-162ccc9dcede.jpg" alt="\u539F\u5B50\u7C7B"></p><p>\u4ECE\u540D\u5B57\u5C31\u53EF\u4EE5\u770B\u5F97\u51FA\u6765\u8FD9\u4E9B\u7C7B\u5927\u6982\u7684\u7528\u9014\uFF1A</p><ul><li>\u539F\u5B50\u66F4\u65B0\u57FA\u672C\u7C7B\u578B</li><li>\u539F\u5B50\u66F4\u65B0\u6570\u7EC4</li><li>\u539F\u5B50\u66F4\u65B0\u5F15\u7528</li><li>\u539F\u5B50\u66F4\u65B0\u5B57\u6BB5\uFF08\u5C5E\u6027\uFF09</li></ul><p>\u8FD9\u91CC\u6211\u4EEC\u4EE5<code>AtomicInteger</code>\u7C7B\u7684<code>getAndAdd(int delta)</code>\u65B9\u6CD5\u4E3A\u4F8B\uFF0C\u6765\u770B\u770BJava\u662F\u5982\u4F55\u5B9E\u73B0\u539F\u5B50\u64CD\u4F5C\u7684\u3002</p><p>\u5148\u770B\u770B\u8FD9\u4E2A\u65B9\u6CD5\u7684\u6E90\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">U</span><span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> VALUE<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684U\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A<code>Unsafe</code>\u5BF9\u8C61\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">jdk<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Unsafe</span> <span class="token class-name">U</span> <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">jdk<span class="token punctuation">.</span>internal<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6240\u4EE5\u5176\u5B9E<code>AtomicInteger</code>\u7C7B\u7684<code>getAndAdd(int delta)</code>\u65B9\u6CD5\u662F\u8C03\u7528<code>Unsafe</code>\u7C7B\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@HotSpotIntrinsicCandidate</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> v<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        v <span class="token operator">=</span> <span class="token function">getIntVolatile</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">weakCompareAndSetInt</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> v<span class="token punctuation">,</span> v <span class="token operator">+</span> delta<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> v<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\uFF1A\u8FD9\u4E2A\u65B9\u6CD5\u662F\u5728JDK 1.8\u624D\u65B0\u589E\u7684\u3002\u5728JDK1.8\u4E4B\u524D\uFF0C<code>AtomicInteger</code>\u6E90\u7801\u5B9E\u73B0\u6709\u6240\u4E0D\u540C\uFF0C\u662F\u57FA\u4E8Efor\u6B7B\u5FAA\u73AF\u7684\uFF0C\u6709\u5174\u8DA3\u7684\u8BFB\u8005\u53EF\u4EE5\u81EA\u884C\u4E86\u89E3\u4E00\u4E0B\u3002</p></blockquote><p>\u6211\u4EEC\u6765\u4E00\u6B65\u6B65\u89E3\u6790\u8FD9\u6BB5\u6E90\u7801\u3002\u9996\u5148\uFF0C\u5BF9\u8C61<code>o</code>\u662F<code>this</code>\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A<code>AtomicInteger</code>\u5BF9\u8C61\u3002\u7136\u540E<code>offset</code>\u662F\u4E00\u4E2A\u5E38\u91CF<code>VALUE</code>\u3002\u8FD9\u4E2A\u5E38\u91CF\u662F\u5728<code>AtomicInteger</code>\u7C7B\u4E2D\u58F0\u660E\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> VALUE <span class="token operator">=</span> <span class="token class-name">U</span><span class="token punctuation">.</span><span class="token function">objectFieldOffset</span><span class="token punctuation">(</span><span class="token class-name">AtomicInteger</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u540C\u6837\u662F\u8C03\u7528\u7684<code>Unsafe</code>\u7684\u65B9\u6CD5\u3002\u4ECE\u65B9\u6CD5\u540D\u5B57\u4E0A\u6765\u770B\uFF0C\u662F\u5F97\u5230\u4E86\u4E00\u4E2A\u5BF9\u8C61\u5B57\u6BB5\u504F\u79FB\u91CF\u3002</p><blockquote><p>\u7528\u4E8E\u83B7\u53D6\u67D0\u4E2A\u5B57\u6BB5\u76F8\u5BF9Java\u5BF9\u8C61\u7684\u201C\u8D77\u59CB\u5730\u5740\u201D\u7684\u504F\u79FB\u91CF\u3002</p><p>\u4E00\u4E2Ajava\u5BF9\u8C61\u53EF\u4EE5\u770B\u6210\u662F\u4E00\u6BB5\u5185\u5B58\uFF0C\u5404\u4E2A\u5B57\u6BB5\u90FD\u5F97\u6309\u7167\u4E00\u5B9A\u7684\u987A\u5E8F\u653E\u5728\u8FD9\u6BB5\u5185\u5B58\u91CC\uFF0C\u540C\u65F6\u8003\u8651\u5230\u5BF9\u9F50\u8981\u6C42\uFF0C\u53EF\u80FD\u8FD9\u4E9B\u5B57\u6BB5\u4E0D\u662F\u8FDE\u7EED\u653E\u7F6E\u7684\uFF0C</p><p>\u7528\u8FD9\u4E2A\u65B9\u6CD5\u80FD\u51C6\u786E\u5730\u544A\u8BC9\u4F60\u67D0\u4E2A\u5B57\u6BB5\u76F8\u5BF9\u4E8E\u5BF9\u8C61\u7684\u8D77\u59CB\u5185\u5B58\u5730\u5740\u7684\u5B57\u8282\u504F\u79FB\u91CF\uFF0C\u56E0\u4E3A\u662F\u76F8\u5BF9\u504F\u79FB\u91CF\uFF0C\u6240\u4EE5\u5B83\u5176\u5B9E\u8DDF\u67D0\u4E2A\u5177\u4F53\u5BF9\u8C61\u53C8\u6CA1\u4EC0\u4E48\u592A\u5927\u5173\u7CFB\uFF0C\u8DDFclass\u7684\u5B9A\u4E49\u548C\u865A\u62DF\u673A\u7684\u5185\u5B58\u6A21\u578B\u7684\u5B9E\u73B0\u7EC6\u8282\u66F4\u76F8\u5173\u3002</p></blockquote><p>\u7EE7\u7EED\u770B\u6E90\u7801\u3002\u524D\u9762\u6211\u4EEC\u8BB2\u5230\uFF0CCAS\u662F\u201C\u65E0\u9501\u201D\u7684\u57FA\u7840\uFF0C\u5B83\u5141\u8BB8\u66F4\u65B0\u5931\u8D25\u3002\u6240\u4EE5\u7ECF\u5E38\u4F1A\u4E0Ewhile\u5FAA\u73AF\u642D\u914D\uFF0C\u5728\u5931\u8D25\u540E\u4E0D\u65AD\u53BB\u91CD\u8BD5\u3002</p><p>\u8FD9\u91CC\u58F0\u660E\u4E86\u4E00\u4E2Av\uFF0C\u4E5F\u5C31\u662F\u8981\u8FD4\u56DE\u7684\u503C\u3002\u4ECE<code>getAndAddInt</code>\u6765\u770B\uFF0C\u5B83\u8FD4\u56DE\u7684\u5E94\u8BE5\u662F\u539F\u6765\u7684\u503C\uFF0C\u800C\u65B0\u7684\u503C\u7684<code>v + delta</code>\u3002</p><p>\u8FD9\u91CC\u4F7F\u7528\u7684\u662F<strong>do-while\u5FAA\u73AF</strong>\u3002\u8FD9\u79CD\u5FAA\u73AF\u4E0D\u591A\u89C1\uFF0C\u5B83\u7684\u76EE\u7684\u662F<strong>\u4FDD\u8BC1\u5FAA\u73AF\u4F53\u5185\u7684\u8BED\u53E5\u81F3\u5C11\u4F1A\u88AB\u6267\u884C\u4E00\u904D</strong>\u3002\u8FD9\u6837\u624D\u80FD\u4FDD\u8BC1return \u7684\u503C<code>v</code>\u662F\u6211\u4EEC\u671F\u671B\u7684\u503C\u3002</p><p>\u5FAA\u73AF\u4F53\u7684\u6761\u4EF6\u662F\u4E00\u4E2ACAS\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">weakCompareAndSetInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span>
                                          <span class="token keyword">int</span> expected<span class="token punctuation">,</span>
                                          <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">compareAndSetInt</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> expected<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span>
                                             <span class="token keyword">int</span> expected<span class="token punctuation">,</span>
                                             <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6700\u7EC8\u5176\u5B9E\u662F\u8C03\u7528\u7684\u6211\u4EEC\u4E4B\u524D\u8BF4\u5230\u4E86CAS <code>native</code>\u65B9\u6CD5\u3002\u90A3\u4E3A\u4EC0\u4E48\u8981\u7ECF\u8FC7\u4E00\u5C42<code>weakCompareAndSetInt</code>\u5462\uFF1F\u4ECEJDK\u6E90\u7801\u4E0A\u770B\u4E0D\u51FA\u6765\u4EC0\u4E48\u3002\u5728JDK 8\u53CA\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u662F\u4E00\u6837\u7684\u3002</p><blockquote><p>\u800C\u5728JDK 9\u5F00\u59CB\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E0A\u9762\u589E\u52A0\u4E86@HotSpotIntrinsicCandidate\u6CE8\u89E3\u3002\u8FD9\u4E2A\u6CE8\u89E3\u5141\u8BB8HotSpot VM\u81EA\u5DF1\u6765\u5199\u6C47\u7F16\u6216IR\u7F16\u8BD1\u5668\u6765\u5B9E\u73B0\u8BE5\u65B9\u6CD5\u4EE5\u63D0\u4F9B\u6027\u80FD\u3002\u4E5F\u5C31\u662F\u8BF4\u867D\u7136\u5916\u9762\u770B\u5230\u7684\u5728JDK9\u4E2DweakCompareAndSet\u548CcompareAndSet\u5E95\u5C42\u4F9D\u65E7\u662F\u8C03\u7528\u4E86\u4E00\u6837\u7684\u4EE3\u7801\uFF0C\u4F46\u662F\u4E0D\u6392\u9664HotSpot VM\u4F1A\u624B\u52A8\u6765\u5B9E\u73B0weakCompareAndSet\u771F\u6B63\u542B\u4E49\u7684\u529F\u80FD\u7684\u53EF\u80FD\u6027\u3002</p></blockquote><p>\u6839\u636E\u672C\u6587\u7B2C\u4E00\u7BC7\u53C2\u8003\u6587\u7AE0\uFF08\u6587\u672B\u94FE\u63A5\uFF09\uFF0C\u5B83\u8DDF<code>volatile</code>\u6709\u5173\u3002</p><p>\u7B80\u5355\u6765\u8BF4\uFF0C<code>weakCompareAndSet</code>\u64CD\u4F5C\u4EC5\u4FDD\u7559\u4E86<code>volatile</code>\u81EA\u8EAB\u53D8\u91CF\u7684\u7279\u6027\uFF0C\u800C\u9664\u53BB\u4E86happens-before\u89C4\u5219\u5E26\u6765\u7684\u5185\u5B58\u8BED\u4E49\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>weakCompareAndSet</code>**\u65E0\u6CD5\u4FDD\u8BC1\u5904\u7406\u64CD\u4F5C\u76EE\u6807\u7684volatile\u53D8\u91CF\u5916\u7684\u5176\u4ED6\u53D8\u91CF\u7684\u6267\u884C\u987A\u5E8F( \u7F16\u8BD1\u5668\u548C\u5904\u7406\u5668\u4E3A\u4E86\u4F18\u5316\u7A0B\u5E8F\u6027\u80FD\u800C\u5BF9\u6307\u4EE4\u5E8F\u5217\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F )\uFF0C\u540C\u65F6\u4E5F\u65E0\u6CD5\u4FDD\u8BC1\u8FD9\u4E9B\u53D8\u91CF\u7684\u53EF\u89C1\u6027\u3002**\u8FD9\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002</p><p>\u518D\u56DE\u5230\u5FAA\u73AF\u6761\u4EF6\u4E0A\u6765\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u662F\u5728\u4E0D\u65AD\u5C1D\u8BD5\u53BB\u7528CAS\u66F4\u65B0\u3002\u5982\u679C\u66F4\u65B0\u5931\u8D25\uFF0C\u5C31\u7EE7\u7EED\u91CD\u8BD5\u3002\u90A3\u4E3A\u4EC0\u4E48\u8981\u628A\u83B7\u53D6\u201C\u65E7\u503C\u201Dv\u7684\u64CD\u4F5C\u653E\u5230\u5FAA\u73AF\u4F53\u5185\u5462\uFF1F\u5176\u5B9E\u8FD9\u4E5F\u5F88\u597D\u7406\u89E3\u3002\u524D\u9762\u6211\u4EEC\u8BF4\u4E86\uFF0CCAS\u5982\u679C\u65E7\u503CV\u4E0D\u7B49\u4E8E\u9884\u671F\u503CE\uFF0C\u5B83\u5C31\u4F1A\u66F4\u65B0\u5931\u8D25\u3002\u8BF4\u660E\u65E7\u7684\u503C\u53D1\u751F\u4E86\u53D8\u5316\u3002\u90A3\u6211\u4EEC\u5F53\u7136\u9700\u8981\u8FD4\u56DE\u7684\u662F\u88AB\u5176\u4ED6\u7EBF\u7A0B\u6539\u53D8\u4E4B\u540E\u7684\u65E7\u503C\u4E86\uFF0C\u56E0\u6B64\u653E\u5728\u4E86do\u5FAA\u73AF\u4F53\u5185\u3002</p><h2 id="cas\u5B9E\u73B0\u539F\u5B50\u64CD\u4F5C\u7684\u4E09\u5927\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#cas\u5B9E\u73B0\u539F\u5B50\u64CD\u4F5C\u7684\u4E09\u5927\u95EE\u9898" aria-hidden="true">#</a> CAS\u5B9E\u73B0\u539F\u5B50\u64CD\u4F5C\u7684\u4E09\u5927\u95EE\u9898</h2><p>\u8FD9\u91CC\u4ECB\u7ECD\u4E00\u4E0BCAS\u5B9E\u73B0\u539F\u5B50\u64CD\u4F5C\u7684\u4E09\u5927\u95EE\u9898\u53CA\u5176\u89E3\u51B3\u65B9\u6848\u3002</p><h3 id="aba\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#aba\u95EE\u9898" aria-hidden="true">#</a> ABA\u95EE\u9898</h3><p>\u6240\u8C13ABA\u95EE\u9898\uFF0C\u5C31\u662F\u4E00\u4E2A\u503C\u539F\u6765\u662FA\uFF0C\u53D8\u6210\u4E86B\uFF0C\u53C8\u53D8\u56DE\u4E86A\u3002\u8FD9\u4E2A\u65F6\u5019\u4F7F\u7528CAS\u662F\u68C0\u67E5\u4E0D\u51FA\u53D8\u5316\u7684\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5374\u88AB\u66F4\u65B0\u4E86\u4E24\u6B21\u3002</p><p>ABA\u95EE\u9898\u7684\u89E3\u51B3\u601D\u8DEF\u662F\u5728\u53D8\u91CF\u524D\u9762\u8FFD\u52A0\u4E0A<strong>\u7248\u672C\u53F7\u6216\u8005\u65F6\u95F4\u6233</strong>\u3002\u4ECEJDK 1.5\u5F00\u59CB\uFF0CJDK\u7684atomic\u5305\u91CC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7C7B<code>AtomicStampedReference</code>\u7C7B\u6765\u89E3\u51B3ABA\u95EE\u9898\u3002</p><p>\u8FD9\u4E2A\u7C7B\u7684<code>compareAndSet</code>\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u9996\u5148\u68C0\u67E5\u5F53\u524D\u5F15\u7528\u662F\u5426\u7B49\u4E8E\u9884\u671F\u5F15\u7528\uFF0C\u5E76\u4E14\u68C0\u67E5\u5F53\u524D\u6807\u5FD7\u662F\u5426\u7B49\u4E8E\u9884\u671F\u6807\u5FD7\uFF0C\u5982\u679C\u4E8C\u8005\u90FD\u76F8\u7B49\uFF0C\u624D\u4F7F\u7528CAS\u8BBE\u7F6E\u4E3A\u65B0\u7684\u503C\u548C\u6807\u5FD7\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token class-name">V</span>   expectedReference<span class="token punctuation">,</span>
                             <span class="token class-name">V</span>   newReference<span class="token punctuation">,</span>
                             <span class="token keyword">int</span> expectedStamp<span class="token punctuation">,</span>
                             <span class="token keyword">int</span> newStamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> current <span class="token operator">=</span> pair<span class="token punctuation">;</span>
    <span class="token keyword">return</span>
        expectedReference <span class="token operator">==</span> current<span class="token punctuation">.</span>reference <span class="token operator">&amp;&amp;</span>
        expectedStamp <span class="token operator">==</span> current<span class="token punctuation">.</span>stamp <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>newReference <span class="token operator">==</span> current<span class="token punctuation">.</span>reference <span class="token operator">&amp;&amp;</span>
          newStamp <span class="token operator">==</span> current<span class="token punctuation">.</span>stamp<span class="token punctuation">)</span> <span class="token operator">||</span>
         <span class="token function">casPair</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> <span class="token class-name">Pair</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>newReference<span class="token punctuation">,</span> newStamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FAA\u73AF\u65F6\u95F4\u957F\u5F00\u9500\u5927" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u65F6\u95F4\u957F\u5F00\u9500\u5927" aria-hidden="true">#</a> \u5FAA\u73AF\u65F6\u95F4\u957F\u5F00\u9500\u5927</h3><p>CAS\u591A\u4E0E\u81EA\u65CB\u7ED3\u5408\u3002\u5982\u679C\u81EA\u65CBCAS\u957F\u65F6\u95F4\u4E0D\u6210\u529F\uFF0C\u4F1A\u5360\u7528\u5927\u91CF\u7684CPU\u8D44\u6E90\u3002</p><p>\u89E3\u51B3\u601D\u8DEF\u662F\u8BA9JVM\u652F\u6301\u5904\u7406\u5668\u63D0\u4F9B\u7684<strong>pause\u6307\u4EE4</strong>\u3002</p><p>pause\u6307\u4EE4\u80FD\u8BA9\u81EA\u65CB\u5931\u8D25\u65F6cpu\u7761\u7720\u4E00\u5C0F\u6BB5\u65F6\u95F4\u518D\u7EE7\u7EED\u81EA\u65CB\uFF0C\u4ECE\u800C\u4F7F\u5F97\u8BFB\u64CD\u4F5C\u7684\u9891\u7387\u4F4E\u5F88\u591A,\u4E3A\u89E3\u51B3\u5185\u5B58\u987A\u5E8F\u51B2\u7A81\u800C\u5BFC\u81F4\u7684CPU\u6D41\u6C34\u7EBF\u91CD\u6392\u7684\u4EE3\u4EF7\u4E5F\u4F1A\u5C0F\u5F88\u591A\u3002</p><h3 id="\u53EA\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u539F\u5B50\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u53EA\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u539F\u5B50\u64CD\u4F5C" aria-hidden="true">#</a> \u53EA\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u539F\u5B50\u64CD\u4F5C</h3><p>\u8FD9\u4E2A\u95EE\u9898\u4F60\u53EF\u80FD\u5DF2\u7ECF\u77E5\u9053\u600E\u4E48\u89E3\u51B3\u4E86\u3002\u6709\u4E24\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A</p><ol><li>\u4F7F\u7528JDK 1.5\u5F00\u59CB\u5C31\u63D0\u4F9B\u7684<code>AtomicReference</code>\u7C7B\u4FDD\u8BC1\u5BF9\u8C61\u4E4B\u95F4\u7684\u539F\u5B50\u6027\uFF0C\u628A\u591A\u4E2A\u53D8\u91CF\u653E\u5230\u4E00\u4E2A\u5BF9\u8C61\u91CC\u9762\u8FDB\u884CCAS\u64CD\u4F5C\uFF1B</li><li>\u4F7F\u7528\u9501\u3002\u9501\u5185\u7684\u4E34\u754C\u533A\u4EE3\u7801\u53EF\u4EE5\u4FDD\u8BC1\u53EA\u6709\u5F53\u524D\u7EBF\u7A0B\u80FD\u64CD\u4F5C\u3002</li></ol><hr>`,77),u=n("p",null,"\u7F16\u8F91\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u5185\u5BB9\u5927\u90E8\u5206\u6765\u6E90\u4EE5\u4E0B\u4E09\u4E2A\u5F00\u6E90\u4ED3\u5E93\uFF1A",-1),r={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},k=e("\u6DF1\u5165\u6D45\u51FA Java \u591A\u7EBF\u7A0B"),v={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},m=e("\u5E76\u53D1\u7F16\u7A0B\u77E5\u8BC6\u603B\u7ED3"),b={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},h=e("Java\u516B\u80A1\u6587"),g=n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png"},null,-1);function f(A,w){const a=p("ExternalLinkIcon");return o(),c("div",null,[d,n("blockquote",null,[u,n("ul",null,[n("li",null,[n("a",r,[k,s(a)])]),n("li",null,[n("a",v,[m,s(a)])]),n("li",null,[n("a",b,[h,s(a)])])])]),g])}var C=t(i,[["render",f],["__file","cas.html.vue"]]);export{C as default};
