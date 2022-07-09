import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as d,c as t,a,b as c,e as i,d as e}from"./app.68c5e420.js";const r={},v=i(`<h1 id="\u4ECEjavap\u7684\u89D2\u5EA6\u8F7B\u677E\u770B\u61C2\u5B57\u8282\u7801" tabindex="-1"><a class="header-anchor" href="#\u4ECEjavap\u7684\u89D2\u5EA6\u8F7B\u677E\u770B\u61C2\u5B57\u8282\u7801" aria-hidden="true">#</a> \u4ECEjavap\u7684\u89D2\u5EA6\u8F7B\u677E\u770B\u61C2\u5B57\u8282\u7801</h1><h3 id="_01\u3001\u5B57\u8282\u7801" tabindex="-1"><a class="header-anchor" href="#_01\u3001\u5B57\u8282\u7801" aria-hidden="true">#</a> 01\u3001\u5B57\u8282\u7801</h3><p>\u8BA1\u7B97\u673A\u6BD4\u8F83\u201C\u50BB\u201D\uFF0C\u53EA\u8BA4 0 \u548C 1\uFF0C\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u7F16\u5199\u7684\u4EE3\u7801\u6700\u7EC8\u90FD\u8981\u7F16\u8BD1\u6210\u673A\u5668\u7801\u624D\u80FD\u88AB\u8BA1\u7B97\u673A\u6267\u884C\u3002Java \u5728\u8BDE\u751F\u4E4B\u521D\u5C31\u63D0\u51FA\u4E86\u4E00\u4E2A\u975E\u5E38\u8457\u540D\u7684\u5BA3\u4F20\u53E3\u53F7: &quot;<strong>\u4E00\u6B21\u7F16\u5199\uFF0C\u5904\u5904\u8FD0\u884C</strong>&quot;\u3002</p><blockquote><p><strong>Write Once, Run Anywhere.</strong></p></blockquote><p>\u4E3A\u4E86\u8FD9\u4E2A\u53E3\u53F7\uFF0CJava \u7684\u4EB2\u5988 Sun \u516C\u53F8\u4EE5\u53CA\u5176\u4ED6\u865A\u62DF\u673A\u63D0\u4F9B\u5546\u53D1\u5E03\u4E86\u8BB8\u591A\u53EF\u4EE5\u5728\u4E0D\u540C\u5E73\u53F0\u4E0A\u8FD0\u884C\u7684 Java \u865A\u62DF\u673A\uFF0C\u800C\u8FD9\u4E9B\u865A\u62DF\u673A\u90FD\u62E5\u6709\u4E00\u4E2A\u5171\u540C\u7684\u529F\u80FD\uFF0C\u90A3\u5C31\u662F\u53EF\u4EE5\u8F7D\u5165\u548C\u6267\u884C\u540C\u4E00\u79CD\u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u5B57\u8282\u7801\uFF08Byte Code\uFF09\u3002</p><p>\u6709\u4E86 Java \u865A\u62DF\u673A\u7684\u5E2E\u52A9\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 Java \u6E90\u4EE3\u7801\u4E0D\u5FC5\u518D\u6839\u636E\u4E0D\u540C\u5E73\u53F0\u7F16\u8BD1\u6210\u5BF9\u5E94\u7684\u673A\u5668\u7801\u4E86\uFF0C\u53EA\u9700\u8981\u751F\u6210\u4E00\u4EFD\u5B57\u8282\u7801\uFF0C\u7136\u540E\u518D\u5C06\u5B57\u8282\u7801\u6587\u4EF6\u4EA4\u7531\u8FD0\u884C\u5728\u4E0D\u540C\u5E73\u53F0\u4E0A\u7684 Java \u865A\u62DF\u673A\u8BFB\u53D6\u540E\u6267\u884C\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u5982\u4ECA\u7684 Java \u865A\u62DF\u673A\u975E\u5E38\u5F3A\u5927\uFF0C\u4E0D\u4EC5\u652F\u6301 Java \u8BED\u8A00\uFF0C\u8FD8\u652F\u6301\u5F88\u591A\u5176\u4ED6\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u6BD4\u5982\u8BF4 Groovy\u3001Scala\u3001Koltin \u7B49\u7B49\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/bytecode-dd31bbd6-c75c-4426-9437-c0f57ea3b86f.png" alt=""></p><p>\u6765\u770B\u4E00\u6BB5\u4EE3\u7801\u5427\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u751F\u6210 Main.class \u6587\u4EF6\u540E\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4F7F\u7528 <code>xxd Main.class</code> \u6253\u5F00 class \u6587\u4EF6\uFF08\u6211\u7528\u7684\u662F Intellij IDEA\uFF0C\u5728 macOS \u73AF\u5883\u4E0B\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/bytecode-bd941085-ff0e-4abf-a5f9-afb0493bfed7.png" alt=""></p><p>\u5BF9\u4E8E\u8FD9\u4E9B 16 \u8FDB\u5236\u5185\u5BB9\uFF0C\u9664\u4E86\u5F00\u5934\u7684 cafe babe\uFF0C\u5269\u4E0B\u7684\u5185\u5BB9\u5927\u81F4\u53EF\u4EE5\u7FFB\u8BD1\u6210\uFF1A\u5565\u73A9\u610F\u554A\u8FD9......</p><p>\u540C\u5B66\u4EEC\u522B\u614C\uFF0C\u5C31\u4ECE&quot;cafe babe&quot;\u8BF4\u8D77\u5427\uFF0C\u8FD9 4 \u4E2A\u5B57\u8282\u79F0\u4E4B\u4E3A<strong>\u9B54\u6570</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u6709\u4EE5&quot;cafe babe&quot;\u5F00\u5934\u7684 class \u6587\u4EF6\u624D\u80FD\u88AB Java \u865A\u62DF\u673A\u63A5\u53D7\uFF0C\u8FD9 4 \u4E2A\u5B57\u8282\u5C31\u662F\u5B57\u8282\u7801\u6587\u4EF6\u7684\u8EAB\u4EFD\u6807\u8BC6\u3002</p><p>\u76EE\u5149\u53F3\u79FB\uFF0C0000 \u662F Java \u7684\u6B21\u7248\u672C\u53F7\uFF0C0037 \u8F6C\u5316\u4E3A\u5341\u8FDB\u5236\u662F 55\uFF0C\u662F\u4E3B\u7248\u672C\u53F7\uFF0CJava \u7684\u7248\u672C\u53F7\u4ECE 45 \u5F00\u59CB\uFF0C\u6BCF\u5347\u4E00\u4E2A\u5927\u7248\u672C\uFF0C\u7248\u672C\u53F7\u52A0 1\uFF0C\u5927\u5BB6\u53EF\u4EE5\u542F\u52A8\u798F\u5C14\u6469\u65AF\u6A21\u5F0F\uFF0C\u63A8\u7406\u4E00\u4E0B\u3002</p>`,15),o=e("\u518D\u5F80\u540E\u9762\u5C31\u662F\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u3002\u300A"),p={href:"https://mp.weixin.qq.com/s/uMEZ2Xwctx4n-_8zvtDp5A",target:"_blank",rel:"noopener noreferrer"},u=e("class \u6587\u4EF6"),b=e("\u300B\u90A3\u4E00\u7BC7\u6211\u662F\u987A\u7740\u5341\u516D\u8FDB\u5236\u5185\u5BB9\u5F80\u4E0B\u5206\u6790\u7684\uFF0C\u53EF\u80FD\u521D\u5B66\u8005\u770B\u8D77\u6765\u6BD4\u8F83\u5934\u5927\uFF0C\u8FD9\u6B21\u6211\u4EEC\u6362\u4E00\u79CD\u66F4\u5BB9\u6613\u61C2\u7684\u65B9\u5F0F\u3002"),m=i(`<h3 id="_02\u3001\u53CD\u7F16\u8BD1\u5B57\u8282\u7801\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_02\u3001\u53CD\u7F16\u8BD1\u5B57\u8282\u7801\u6587\u4EF6" aria-hidden="true">#</a> <strong>02\u3001\u53CD\u7F16\u8BD1\u5B57\u8282\u7801\u6587\u4EF6</strong></h3><p>Java \u5185\u7F6E\u4E86\u4E00\u4E2A\u53CD\u7F16\u8BD1\u547D\u4EE4 javap\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>javap -help</code> \u4E86\u89E3 javap \u7684\u57FA\u672C\u7528\u6CD5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/bytecode-84b7af5c-93b1-4f63-bb30-946ab3d7e98c.png" alt=""></p><p>OK\uFF0C\u6211\u4EEC\u8F93\u5165\u547D\u4EE4 <code>javap -v -p Main.class</code> \u6765\u67E5\u770B\u4E00\u4E0B\u8F93\u51FA\u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Classfile /Users/maweiqing/Documents/GitHub/TechSisterLearnJava/codes/TechSister/target/classes/com/itwanger/jvm/Main.class
  Last modified 2021\u5E744\u670815\u65E5; size 385 bytes
  SHA-256 checksum 6688843e4f70ae8d83040dc7c8e2dd3694bf10ba7c518a6ea9b88b318a8967c6
  Compiled from &quot;Main.java&quot;
public class com.itwanger.jvm.Main
  minor version: 0
  major version: 55
  flags: (0x0021) ACC_PUBLIC, ACC_SUPER
  this_class: #3                          // com/itwanger/jvm/Main
  super_class: #4                         // java/lang/Object
  interfaces: 0, fields: 1, methods: 2, attributes: 1
Constant pool:
   #1 = Methodref          #4.#18         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V
   #2 = Fieldref           #3.#19         // com/itwanger/jvm/Main.age:I
   #3 = Class              #20            // com/itwanger/jvm/Main
   #4 = Class              #21            // java/lang/Object
   #5 = Utf8               age
   #6 = Utf8               I
   #7 = Utf8               &lt;init&gt;
   #8 = Utf8               ()V
   #9 = Utf8               Code
  #10 = Utf8               LineNumberTable
  #11 = Utf8               LocalVariableTable
  #12 = Utf8               this
  #13 = Utf8               Lcom/itwanger/jvm/Main;
  #14 = Utf8               getAge
  #15 = Utf8               ()I
  #16 = Utf8               SourceFile
  #17 = Utf8               Main.java
  #18 = NameAndType        #7:#8          // &quot;&lt;init&gt;&quot;:()V
  #19 = NameAndType        #5:#6          // age:I
  #20 = Utf8               com/itwanger/jvm/Main
  #21 = Utf8               java/lang/Object
{
  private int age;
    descriptor: I
    flags: (0x0002) ACC_PRIVATE

  public com.itwanger.jvm.Main();
    descriptor: ()V
    flags: (0x0001) ACC_PUBLIC
    Code:
      stack=2, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: aload_0
         5: bipush        18
         7: putfield      #2                  // Field age:I
        10: return
      LineNumberTable:
        line 6: 0
        line 7: 4
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0      11     0  this   Lcom/itwanger/jvm/Main;

  public int getAge();
    descriptor: ()I
    flags: (0x0001) ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: getfield      #2                  // Field age:I
         4: ireturn
      LineNumberTable:
        line 9: 0
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       5     0  this   Lcom/itwanger/jvm/Main;
}
SourceFile: &quot;Main.java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7741\u5927\u773C\u775B\u77A7\u8FC7\u53BB\uFF0C\u611F\u89C9\u5185\u5BB9\u633A\u591A\u7684\u3002\u540C\u5B66\u4EEC\u4E0D\u8981\u7740\u6025\uFF0C\u6211\u4EEC\u6765\u4E00\u884C\u4E00\u884C\u5206\u6790\u3002</p><p>\u7B2C 1 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Classfile /Users/maweiqing/Documents/GitHub/TechSisterLearnJava/codes/TechSister/target/classes/com/itwanger/jvm/Main.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B57\u8282\u7801\u6587\u4EF6\u7684\u4F4D\u7F6E\u3002</p><p>\u7B2C 2 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Last modified 2021\u5E744\u670815\u65E5; size 385 bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B57\u8282\u7801\u6587\u4EF6\u7684\u4FEE\u6539\u65E5\u671F\u3001\u6587\u4EF6\u5927\u5C0F\u3002</p><p>\u7B2C 3 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SHA-256 checksum 6688843e4f70ae8d83040dc7c8e2dd3694bf10ba7c518a6ea9b88b318a8967c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B57\u8282\u7801\u6587\u4EF6\u7684 SHA-256 \u503C\u3002</p><p>\u7B2C 4 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Compiled from &quot;Main.java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BF4\u660E\u8BE5\u5B57\u8282\u7801\u6587\u4EF6\u7F16\u8BD1\u81EA Main.java \u6E90\u6587\u4EF6\u3002</p><p>\u7B2C 5 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class com.itwanger.jvm.Main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B57\u8282\u7801\u6587\u4EF6\u7684\u7C7B\u5168\u540D\u3002</p><p>\u7B2C 6 \u884C <code>minor version: 0</code>\uFF0C\u6B21\u7248\u672C\u53F7\u3002</p><p>\u7B2C 7 \u884C <code>major version: 55</code>\uFF0C\u4E3B\u7248\u672C\u53F7\u3002</p><p>\u7B2C 8 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flags: (0x0021) ACC_PUBLIC, ACC_SUPER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u8BBF\u95EE\u6807\u8BB0\uFF0C\u4E00\u5171\u6709 8 \u79CD\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/bytecode-d12d6983-f427-40d2-bb4b-3a2c6c4c7806.png" alt=""></p><p>\u8868\u660E\u5F53\u524D\u7C7B\u662F <code>ACC_PUBLIC | ACC_SUPER</code>\u3002\u4F4D\u8FD0\u7B97\u7B26 <code>|</code> \u7684\u610F\u601D\u662F\u5982\u679C\u76F8\u5BF9\u5E94\u4F4D\u662F 0\uFF0C\u5219\u7ED3\u679C\u4E3A 0\uFF0C\u5426\u5219\u4E3A 1\uFF0C\u6240\u4EE5 <code>0x0001 | 0x0020</code> \u7684\u7ED3\u679C\u662F <code>0x0021</code>\uFF08\u9700\u8981\u8F6C\u6210\u4E8C\u8FDB\u5236\u8FDB\u884C\u8FD0\u7B97\uFF09\u3002</p><p>\u7B2C 9 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>this_class: #3                          // com/itwanger/jvm/Main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u524D\u7C7B\u7684\u7D22\u5F15\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 3 \u7684\u5E38\u91CF\uFF0C\u53EF\u4EE5\u770B\u5F97\u51FA\u5F53\u524D\u7C7B\u662F Main \u7C7B\u3002</p><p>\u7B2C 10 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>super_class: #4                         // java/lang/Object
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7236\u7C7B\u7684\u7D22\u5F15\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 6 \u7684\u5E38\u91CF\uFF0C\u53EF\u4EE5\u770B\u5F97\u51FA\u5F53\u524D\u7C7B\u7684\u7236\u7C7B\u662F Object \u7C7B\u3002</p><p>\u7B2C 11 \u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>interfaces: 0, fields: 1, methods: 2, attributes: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u524D\u7C7B\u6709 0 \u4E2A\u63A5\u53E3\uFF0C1 \u4E2A\u5B57\u6BB5\uFF08age\uFF09\uFF0C2 \u4E2A\u65B9\u6CD5\uFF08<code>write()</code>\u65B9\u6CD5\u548C\u7F3A\u7701\u7684\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5\uFF09\uFF0C1 \u4E2A\u5C5E\u6027\uFF08\u8BE5\u7C7B\u4EC5\u6709\u7684\u4E00\u4E2A\u5C5E\u6027\u662F SourceFIle\uFF0C\u5305\u542B\u4E86\u6E90\u7801\u6587\u4EF6\u7684\u4FE1\u606F\uFF09\u3002</p><h3 id="_03\u3001\u5E38\u91CF\u6C60" tabindex="-1"><a class="header-anchor" href="#_03\u3001\u5E38\u91CF\u6C60" aria-hidden="true">#</a> 03\u3001\u5E38\u91CF\u6C60</h3><p>\u63A5\u4E0B\u6765\u662F Constant pool\uFF0C\u4E5F\u5C31\u662F\u5B57\u8282\u7801\u6587\u4EF6\u6700\u91CD\u8981\u7684\u5E38\u91CF\u6C60\u90E8\u5206\u3002\u53EF\u4EE5\u628A\u5E38\u91CF\u6C60\u7406\u89E3\u4E3A\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u7684\u8D44\u6E90\u4ED3\u5E93\uFF0C\u4E3B\u8981\u5B58\u653E\u4E24\u5927\u7C7B\u4FE1\u606F\u3002</p><p>1\uFF09\u5B57\u9762\u91CF\uFF08Literal\uFF09\uFF0C\u6709\u70B9\u7C7B\u4F3C Java \u4E2D\u7684\u5E38\u91CF\u6982\u5FF5\uFF0C\u6BD4\u5982\u6587\u672C\u5B57\u7B26\u4E32\uFF0Cfinal \u5E38\u91CF\u7B49\u3002</p><p>2\uFF09\u7B26\u53F7\u5F15\u7528\uFF08Symbolic References\uFF09\uFF0C\u5C5E\u4E8E\u7F16\u8BD1\u539F\u7406\u65B9\u9762\u7684\u6982\u5FF5\uFF0C\u5305\u62EC 3 \u79CD\uFF1A</p><ul><li>\u7C7B\u548C\u63A5\u53E3\u7684\u5168\u9650\u5B9A\u540D\uFF08Fully Qualified Name\uFF09</li><li>\u5B57\u6BB5\u7684\u540D\u79F0\u548C\u63CF\u8FF0\u7B26\uFF08Descriptor\uFF09</li><li>\u65B9\u6CD5\u7684\u540D\u79F0\u548C\u63CF\u8FF0\u7B26</li></ul><p>Java \u865A\u62DF\u673A\u662F\u5728\u52A0\u8F7D\u5B57\u8282\u7801\u6587\u4EF6\u7684\u65F6\u5019\u624D\u8FDB\u884C\u7684\u52A8\u6001\u94FE\u63A5\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B57\u6BB5\u548C\u65B9\u6CD5\u7684\u7B26\u53F7\u5F15\u7528\u53EA\u6709\u7ECF\u8FC7\u8FD0\u884C\u671F\u8F6C\u6362\u540E\u624D\u80FD\u83B7\u5F97\u771F\u6B63\u7684\u5185\u5B58\u5730\u5740\u3002\u5F53 Java \u865A\u62DF\u673A\u8FD0\u884C\u65F6\uFF0C\u9700\u8981\u4ECE\u5E38\u91CF\u6C60\u83B7\u53D6\u5BF9\u5E94\u7684\u7B26\u53F7\u5F15\u7528\uFF0C\u7136\u540E\u5728\u7C7B\u521B\u5EFA\u6216\u8005\u8FD0\u884C\u65F6\u89E3\u6790\u5E76\u7FFB\u8BD1\u5230\u5177\u4F53\u7684\u5185\u5B58\u5730\u5740\u4E0A\u3002</p><p>\u5F53\u524D\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u4E00\u5171\u6709 21 \u4E2A\u5E38\u91CF\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u662F\u6709\u94FE\u63A5\u7684\uFF0C\u9010\u4E2A\u5206\u6790\u4F1A\u6BD4\u8F83\u4E71\uFF0C\u6211\u4EEC\u91C7\u7528\u987A\u85E4\u6478\u74DC\u7684\u65B9\u5F0F\uFF0C\u4ECE\u4E0A\u4F9D\u6B21\u5F80\u4E0B\u770B\uFF0C\u90A3\u4E9B\u88AB\u94FE\u63A5\u7684\u5E38\u91CF\u6211\u4EEC\u5C31\u70B9\u5230\u4E3A\u6B62\u3002</p><p><em>\u6CE8</em>\uFF1A</p><ul><li><p><code>#</code> \u53F7\u540E\u9762\u8DDF\u7684\u662F\u7D22\u5F15\uFF0C\u7D22\u5F15\u6CA1\u6709\u4ECE 0 \u5F00\u59CB\u800C\u662F\u4ECE 1 \u5F00\u59CB\uFF0C\u662F\u56E0\u4E3A\u8BBE\u8BA1\u8005\u8003\u8651\u5230\uFF0C\u201C\u5982\u679C\u8981\u8868\u8FBE\u4E0D\u5F15\u7528\u4EFB\u4F55\u4E00\u4E2A\u5E38\u91CF\u7684\u542B\u4E49\u65F6\uFF0C\u53EF\u4EE5\u5C06\u7D22\u5F15\u503C\u8BBE\u4E3A 0 \u6765\u8868\u793A\u201D\uFF08\u300A\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A\u300B\u63CF\u8FF0\u7684\uFF09\u3002</p></li><li><p><code>=</code> \u53F7\u540E\u9762\u8DDF\u7684\u662F\u5E38\u91CF\u7684\u7C7B\u578B\uFF0C\u6CA1\u6709\u5305\u542B\u524D\u7F00 <code>CONSTANT_</code> \u548C\u540E\u7F00 <code>_info</code>\u3002</p></li><li><p>\u5168\u6587\u4E2D\u63D0\u5230\u7684\u7D22\u5F15\u7B49\u540C\u4E8E\u4E0B\u6807\uFF0C\u4E3A\u4E86\u7075\u6D3B\u63CF\u8FF0\uFF0C\u6CA1\u6709\u505A\u7EDF\u4E00\u3002</p></li></ul><hr><p>\u7B2C 1 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#1 = Methodref          #4.#18         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Methodref\uFF0C\u8868\u660E\u662F\u7528\u6765\u5B9A\u4E49\u65B9\u6CD5\u7684\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 4 \u548C 18 \u7684\u5E38\u91CF\u3002</p><p>\u7B2C 4 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#4 = Class              #21            // java/lang/Object
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Class\uFF0C\u8868\u660E\u662F\u7528\u6765\u5B9A\u4E49\u7C7B\uFF08\u6216\u8005\u63A5\u53E3\uFF09\u7684\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 21 \u7684\u5E38\u91CF\u3002</p><p>\u7B2C 21 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#21 = Utf8               java/lang/Object
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Utf8\uFF0CUTF-8 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF0C\u503C\u4E3A <code>java/lang/Object</code>\u3002</p><p>\u7B2C 18 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#18 = NameAndType        #7:#8          // &quot;&lt;init&gt;&quot;:()V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A NameAndType\uFF0C\u8868\u660E\u662F\u5B57\u6BB5\u6216\u8005\u65B9\u6CD5\u7684\u90E8\u5206\u7B26\u53F7\u5F15\u7528\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 7 \u548C 8 \u7684\u5E38\u91CF\u3002</p><p>\u7B2C 7 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#7 = Utf8               &lt;init&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Utf8\uFF0CUTF-8 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF0C\u503C\u4E3A <code>&lt;init&gt;</code>\uFF0C\u8868\u660E\u4E3A\u6784\u9020\u65B9\u6CD5\u3002</p><p>\u7B2C 8 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#8 = Utf8               ()V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Utf8\uFF0CUTF-8 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF0C\u503C\u4E3A <code>()V</code>\uFF0C\u8868\u660E\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4E3A void\u3002</p><p>\u5230\u6B64\u4E3A\u6B62\uFF0C\u7B2C 1 \u4E2A\u5E38\u91CF\u7B97\u662F\u6478\u5B8C\u4E86\u3002\u7EC4\u5408\u8D77\u6765\u7684\u610F\u601D\u5C31\u662F\uFF0CMain \u7C7B\u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u6765\u6E90\u4E8E Object \u7C7B\u3002</p><hr><p>\u7B2C 2 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#2 = Fieldref           #3.#19         // com/itwanger/jvm/Main.age:I
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Fieldref\uFF0C\u8868\u660E\u662F\u7528\u6765\u5B9A\u4E49\u5B57\u6BB5\u7684\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 3 \u548C 19 \u7684\u5E38\u91CF\u3002</p><p>\u7B2C 3 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#3 = Class              #20            // com/itwanger/jvm/Main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Class\uFF0C\u8868\u660E\u662F\u7528\u6765\u5B9A\u4E49\u7C7B\uFF08\u6216\u8005\u63A5\u53E3\uFF09\u7684\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 20 \u7684\u5E38\u91CF\u3002</p><p>\u7B2C 19 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#19 = NameAndType        #5:#6          // age:I
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A NameAndType\uFF0C\u8868\u660E\u662F\u5B57\u6BB5\u6216\u8005\u65B9\u6CD5\u7684\u90E8\u5206\u7B26\u53F7\u5F15\u7528\uFF0C\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u4E0B\u6807\u4E3A 5 \u548C 6 \u7684\u5E38\u91CF\u3002</p><p>\u7B2C 5 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#5 = Utf8               age
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Utf8\uFF0CUTF-8 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF0C\u503C\u4E3A <code>age</code>\uFF0C\u8868\u660E\u5B57\u6BB5\u540D\u4E3A age\u3002</p><p>\u7B2C 6 \u4E2A\u5E38\u91CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#6 = Utf8               I
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7C7B\u578B\u4E3A Utf8\uFF0CUTF-8 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\uFF0C\u503C\u4E3A <code>I</code>\uFF0C\u8868\u660E\u5B57\u6BB5\u7684\u7C7B\u578B\u4E3A int\u3002</p><p>\u5173\u4E8E\u5B57\u6BB5\u7C7B\u578B\u7684\u63CF\u8FF0\u7B26\u6620\u5C04\u8868\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/bytecode-cbf16ce9-7853-4050-a1c0-8b874f3b0c1e.png" alt=""></p><p>\u5230\u6B64\u4E3A\u6B62\uFF0C\u7B2C 2 \u4E2A\u5E38\u91CF\u7B97\u662F\u6478\u5B8C\u4E86\u3002\u7EC4\u5408\u8D77\u6765\u7684\u610F\u601D\u5C31\u662F\uFF0C\u58F0\u660E\u4E86\u4E00\u4E2A\u7C7B\u578B\u4E3A int \u7684\u5B57\u6BB5 age\u3002</p><hr><h3 id="_04\u3001\u5B57\u6BB5\u8868\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_04\u3001\u5B57\u6BB5\u8868\u96C6\u5408" aria-hidden="true">#</a> 04\u3001\u5B57\u6BB5\u8868\u96C6\u5408</h3><p>\u5B57\u6BB5\u8868\u7528\u6765\u63CF\u8FF0\u63A5\u53E3\u6216\u8005\u7C7B\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5305\u62EC\u7C7B\u53D8\u91CF\u548C\u6210\u5458\u53D8\u91CF\uFF0C\u4F46\u4E0D\u5305\u542B\u58F0\u660E\u5728\u65B9\u6CD5\u4E2D\u5C40\u90E8\u53D8\u91CF\u3002</p><p>\u5B57\u6BB5\u7684\u4FEE\u9970\u7B26\u4E00\u822C\u6709\uFF1A</p><ul><li>\u8BBF\u95EE\u6743\u9650\u4FEE\u9970\u7B26\uFF0C\u6BD4\u5982 public private protected</li><li>\u9759\u6001\u53D8\u91CF\u4FEE\u9970\u7B26\uFF0C\u6BD4\u5982 static</li><li>final \u4FEE\u9970\u7B26</li><li>\u5E76\u53D1\u53EF\u89C1\u6027\u4FEE\u9970\u7B26\uFF0C\u6BD4\u5982 volatile</li><li>\u5E8F\u5217\u5316\u4FEE\u9970\u7B26\uFF0C\u6BD4\u5982 transient</li></ul><p>\u7136\u540E\u662F\u5B57\u6BB5\u7684\u7C7B\u578B\uFF08\u53EF\u4EE5\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3001\u6570\u7EC4\u548C\u5BF9\u8C61\uFF09\u548C\u540D\u79F0\u3002</p><p>\u5728 Main.class \u5B57\u8282\u7801\u6587\u4EF6\u4E2D\uFF0C\u5B57\u6BB5\u8868\u7684\u4FE1\u606F\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>private int age;
    descriptor: I
    flags: (0x0002) ACC_PRIVATE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8868\u660E\u5B57\u6BB5\u7684\u8BBF\u95EE\u6743\u9650\u4FEE\u9970\u7B26\u4E3A private\uFF0C\u7C7B\u578B\u4E3A int\uFF0C\u540D\u79F0\u4E3A age\u3002</p><p>\u5B57\u6BB5\u7684\u8BBF\u95EE\u6807\u5FD7\u548C\u7C7B\u7684\u8BBF\u95EE\u6807\u5FD7\u975E\u5E38\u7C7B\u4F3C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/bytecode-5f328e11-3486-4eb4-8fa9-5c5febfab894.png" alt=""></p><h3 id="_05\u3001\u65B9\u6CD5\u8868\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_05\u3001\u65B9\u6CD5\u8868\u96C6\u5408" aria-hidden="true">#</a> <strong>05\u3001\u65B9\u6CD5\u8868\u96C6\u5408</strong></h3><p>\u65B9\u6CD5\u8868\u7528\u6765\u63CF\u8FF0\u63A5\u53E3\u6216\u8005\u7C7B\u4E2D\u58F0\u660E\u7684\u65B9\u6CD5\uFF0C\u5305\u62EC\u7C7B\u65B9\u6CD5\u548C\u6210\u5458\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u6784\u9020\u65B9\u6CD5\u3002\u65B9\u6CD5\u7684\u4FEE\u9970\u7B26\u548C\u5B57\u6BB5\u7565\u6709\u4E0D\u540C\uFF0C\u6BD4\u5982\u8BF4 volatile \u548C transient \u4E0D\u80FD\u7528\u6765\u4FEE\u9970\u65B9\u6CD5\uFF0C\u518D\u6BD4\u5982\u8BF4\u65B9\u6CD5\u7684\u4FEE\u9970\u7B26\u591A\u4E86 synchronized\u3001native\u3001strictfp \u548C abstract\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/bytecode-fd434d5c-ffc6-4a24-9787-98e573035068.png" alt=""></p><p>\u4E0B\u9762\u8FD9\u90E8\u5206\u4E3A\u6784\u9020\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E3A void\uFF0C\u8BBF\u95EE\u6807\u5FD7\u4E3A public\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  public com.itwanger.jvm.Main();
    descriptor: ()V
    flags: (0x0001) ACC_PUBLIC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6765\u8BE6\u7EC6\u770B\u4E00\u4E0B\u5176\u4E2D Code \u5C5E\u6027\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    Code:
      stack=2, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: aload_0
         5: bipush        18
         7: putfield      #2                  // Field age:I
        10: return
      LineNumberTable:
        line 6: 0
        line 7: 4
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0      11     0  this   Lcom/itwanger/jvm/Main;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>stack \u4E3A\u6700\u5927\u64CD\u4F5C\u6570\u6808\uFF0CJava \u865A\u62DF\u673A\u5728\u8FD0\u884C\u7684\u65F6\u5019\u4F1A\u6839\u636E\u8FD9\u4E2A\u503C\u6765\u5206\u914D\u6808\u5E27\u7684\u64CD\u4F5C\u6570\u6808\u6DF1\u5EA6\u3002</p></li><li><p>locals \u4E3A\u5C40\u90E8\u53D8\u91CF\u6240\u9700\u8981\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5355\u4F4D\u4E3A\u69FD\uFF08slot\uFF09\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570\u53D8\u91CF\u548C\u65B9\u6CD5\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u90FD\u4F1A\u5B58\u50A8\u5728\u5C40\u90E8\u53D8\u91CF\u8868\u4E2D\u3002</p></li><li><p>args_size \u4E3A\u65B9\u6CD5\u7684\u53C2\u6570\u4E2A\u6570\u3002</p></li></ul><p>\u4E3A\u4EC0\u4E48 stack \u7684\u503C\u4E3A 2\uFF0Clocals \u7684\u503C\u4E3A 1\uFF0Cargs_size \u7684\u503C\u4E3A 1 \u5462\uFF1F \u9ED8\u8BA4\u7684\u6784\u9020\u65B9\u6CD5\u4E0D\u662F\u6CA1\u6709\u53C2\u6570\u548C\u5C40\u90E8\u53D8\u91CF\u5417\uFF1F</p><p>\u8FD9\u662F\u56E0\u4E3A\u6709\u4E00\u4E2A\u9690\u85CF\u7684 this \u53D8\u91CF\uFF0C\u53EA\u8981\u4E0D\u662F\u9759\u6001\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u5F53\u524D\u7C7B\u7684\u5BF9\u8C61 this \u6084\u6084\u7684\u5B58\u5728\u7740\u3002\u8FD9\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48 locals \u548C args_size \u7684\u503C\u4E3A 1 \u7684\u95EE\u9898\u3002\u90A3\u4E3A\u4EC0\u4E48 stack \u7684\u503C\u4E3A 2 \u5462\uFF1F\u56E0\u4E3A\u5B57\u8282\u7801\u6307\u4EE4 invokespecial\uFF08\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\u8FDB\u884C\u521D\u59CB\u5316\uFF09\u4F1A\u6D88\u8017\u6389\u4E00\u4E2A\u5F53\u524D\u7C7B\u7684\u5F15\u7528\uFF0C\u6240\u4EE5 aload_0 \u6267\u884C\u4E86 2 \u6B21\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u64CD\u4F5C\u6570\u6808\u7684\u5927\u5C0F\u4E3A 2\u3002</p><p>\u5173\u4E8E\u5B57\u8282\u7801\u6307\u4EE4\uFF0C\u6211\u4EEC\u540E\u9762\u518D\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><ul><li><p>LineNumberTable\uFF0C\u8BE5\u5C5E\u6027\u7684\u4F5C\u7528\u662F\u63CF\u8FF0\u6E90\u7801\u884C\u53F7\u4E0E\u5B57\u8282\u7801\u884C\u53F7(\u5B57\u8282\u7801\u504F\u79FB\u91CF)\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB\u3002</p></li><li><p>LocalVariableTable\uFF0C\u8BE5\u5C5E\u6027\u7684\u4F5C\u7528\u662F\u63CF\u8FF0\u5E27\u6808\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u4E0E\u6E90\u7801\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u5927\u5BB6\u4ED4\u7EC6\u770B\u4E00\u4E0B\uFF0C\u5C31\u80FD\u770B\u5230 this \u7684\u5F71\u5B50\u4E86\u3002</p></li></ul><p>\u4E0B\u9762\u8FD9\u90E8\u5206\u4E3A\u6210\u5458\u65B9\u6CD5 <code>getAge()</code>\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E3A int\uFF0C\u8BBF\u95EE\u6807\u5FD7\u4E3A public\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  public int getAge();
    descriptor: ()I
    flags: (0x0001) ACC_PUBLIC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7406\u89E3\u4E86\u6784\u9020\u65B9\u6CD5\u7684 Code \u5C5E\u6027\u540E\uFF0C\u518D\u770B <code>getAge()</code> \u65B9\u6CD5\u7684 Code \u5C5E\u6027\u65F6\uFF0C\u5C31\u5F88\u5BB9\u6613\u7406\u89E3\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: getfield      #2                  // Field age:I
         4: ireturn
      LineNumberTable:
        line 9: 0
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       5     0  this   Lcom/itwanger/jvm/Main;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u5927\u64CD\u4F5C\u6570\u6808\u4E3A 1\uFF0C\u5C40\u90E8\u53D8\u91CF\u6240\u9700\u8981\u7684\u5B58\u50A8\u7A7A\u95F4\u4E3A 1\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570\u4E2A\u6570\u4E3A 1\uFF0C\u662F\u56E0\u4E3A\u5C40\u90E8\u53D8\u91CF\u53EA\u6709\u4E00\u4E2A\u9690\u85CF\u7684 this\uFF0C\u5E76\u4E14\u5B57\u8282\u7801\u6307\u4EE4\u4E2D\u53EA\u6267\u884C\u4E86\u4E00\u6B21 aload_0\u3002</p><hr><p>\u5176\u5B9E\u5B66\u4E60\u662F\u8FD9\u6837\u7684\uFF0C\u53EF\u4EE5\u6A2A\u5411\u6269\u5C55\uFF0C\u4E5F\u53EF\u4EE5\u7EB5\u5411\u6269\u5C55\u3002\u5F53\u6211\u4EEC\u521D\u5B66\u7F16\u7A0B\u7684\u65F6\u5019\uFF0C\u7279\u522B\u60F3\u591A\u5B66\u4E00\u70B9\uFF0C\u5C5E\u4E8E\u6A2A\u5411\u6269\u5C55\uFF0C\u5F53\u6709\u4E86\u4E00\u5B9A\u7684\u7F16\u7A0B\u7ECF\u9A8C\u540E\uFF0C\u60F3\u66F4\u4E0A\u4E00\u5C42\u697C\uFF0C\u5C31\u9700\u8981\u7EB5\u5411\u6269\u5C55\uFF0C\u4E0D\u65AD\u6DF1\u5165\u5730\u5B66\uFF0C\u8FDE\u6839\u62D4\u8D77\uFF0C\u4ECE\u800C\u5F62\u6210\u81EA\u5DF1\u7684\u77E5\u8BC6\u4F53\u7CFB\u3002</p><p>\u65E0\u8BBA\u662F\u4ECE\u5341\u516D\u8FDB\u5236\u7684\u5B57\u8282\u7801\u89D2\u5EA6\uFF0C\u8FD8\u662F jclasslib \u56FE\u5F62\u5316\u67E5\u770B\u53CD\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u7684\u89D2\u5EA6\uFF0C\u4E5F\u6216\u8005\u662F\u4ECA\u5929\u8FD9\u6837\u4ECE javap \u53CD\u7F16\u8BD1\u540E\u7684\u89D2\u5EA6\uFF0C\u90FD\u80FD\u7AA5\u63A2\u51FA\u4E00\u4E9B\u65B0\u7684\u5185\u5BB9\u6765\uFF01</p><p>\u521D\u5B66\u8005\u4E00\u5F00\u59CB\u63A5\u89E6\u5B57\u8282\u7801\u7684\u65F6\u5019\u4F1A\u611F\u89C9\u6BD4\u8F83\u5934\u5927\uFF0C\u6CA1\u5173\u7CFB\uFF0C\u6211\u5F53\u521D\u4E5F\u662F\u8FD9\u6837\uFF0C\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u7ECF\u9A8C\u7684\u79EF\u7D2F\uFF0C\u6162\u6162\u5C31\u597D\u4E86\uFF0C\u8D8A\u5F80\u6DF1\u5904\u94BB\uFF0C\u5C31\u8D8A\u80FD\u4F53\u4F1A\u5230\u90A3\u79CD\u201C\u6280\u672F\u6211\u6709\uFF0C\u96C4\u9738\u5929\u4E0B\u201D\u7684\u611F\u89C9~</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,118);function g(x,h){const n=l("ExternalLinkIcon");return d(),t("div",null,[v,a("p",null,[o,a("a",p,[u,c(n)]),b]),m])}var _=s(r,[["render",g],["__file","bytecode.html.vue"]]);export{_ as default};
