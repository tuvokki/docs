webpackJsonp([39686620821310],{419:function(n,a){n.exports={data:{post:{html:'<h1 id="validation"><a href="#validation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Validation</h1>\n<p>API Platform take care of validating data sent to the API by the client (usually user data entered through forms).\nBy default, the framework relies on <a href="http://symfony.com/doc/current/validation.html" target="_blank" rel="nofollow noopener noreferrer">the powerful Symfony Validator Component</a>\nfor this task, but you can replace it by your preferred validation library such as <a href="http://php.net/manual/en/intro.filter.php" target="_blank" rel="nofollow noopener noreferrer">the PHP filter extension</a>\nif you want to.</p>\n<h2 id="validating-submitted-data"><a href="#validating-submitted-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Validating Submitted Data</h2>\n<p>Validating submitted data is simple as adding <a href="http://symfony.com/doc/current/reference/constraints.html" target="_blank" rel="nofollow noopener noreferrer">Symfony\'s built-in constraints</a>\nor <a href="http://symfony.com/doc/current/validation/custom_constraint.html" target="_blank" rel="nofollow noopener noreferrer">custom constraints</a> directly in classes marked with\nthe <code>@ApiResource</code> annotation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/Product.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span> <span class="token comment">// Symfony\'s built-in constraints</span>\n<span class="token keyword">use</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints<span class="token punctuation">\\</span>MinimalProperties</span><span class="token punctuation">;</span> <span class="token comment">// A custom constraint</span>\n\n<span class="token comment">/**\n * A product.\n *\n * @ApiResource\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Product</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @var int The id of this product.\n     *\n     * @ORM\\Id\n     * @ORM\\GeneratedValue\n     * @ORM\\Column(type="integer")\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$id</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @var string The name of the product\n     *\n     * @Assert\\NotBlank\n     * @ORM\\Column\n     */</span>\n    <span class="token keyword">private</span> name<span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @var string[] Describe the product\n     *\n     * @MinimalProperties\n     * @ORM\\Column(type="json")\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$properties</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Getters and setters...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Here is a custom constraint and the related validator:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Validator/Constraints/MinimalProperties.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraint</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @Annotation\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">MinimalProperties</span> <span class="token keyword">extends</span> <span class="token class-name">Constraint</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token variable">$message</span> <span class="token operator">=</span> <span class="token string">\'The product must have the minimal properties required ("description", "price")\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Validator/Constraints/MinimalPropertiesValidator.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraint</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>ConstraintValidator</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @Annotation\n */</span>\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">MinimalPropertiesValidator</span> <span class="token keyword">extends</span> <span class="token class-name">ConstraintValidator</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> Constraint <span class="token variable">$constraint</span><span class="token punctuation">)</span><span class="token punctuation">:</span> void\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">array_diff</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'description\'</span><span class="token punctuation">,</span> <span class="token string">\'price\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">context</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">buildViolation</span><span class="token punctuation">(</span><span class="token variable">$constraint</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">message</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">addViolation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If the data submitted by the client is invalid, the HTTP status code will be set to <code>400 Bad Request</code> and the response\'s\nbody will contain the list of violations serialized in a format compliant with the requested one. For instance, a validation\nerror will look like the following if the requested format is JSON-LD (the default):</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"@context"</span><span class="token operator">:</span> <span class="token string">"/contexts/ConstraintViolationList"</span><span class="token punctuation">,</span>\n  <span class="token property">"@type"</span><span class="token operator">:</span> <span class="token string">"ConstraintViolationList"</span><span class="token punctuation">,</span>\n  <span class="token property">"hydra:title"</span><span class="token operator">:</span> <span class="token string">"An error occurred"</span><span class="token punctuation">,</span>\n  <span class="token property">"hydra:description"</span><span class="token operator">:</span> <span class="token string">"properties: The product must have the minimal properties required (\\"description\\", \\"price\\")"</span><span class="token punctuation">,</span>\n  <span class="token property">"violations"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">"propertyPath"</span><span class="token operator">:</span> <span class="token string">"properties"</span><span class="token punctuation">,</span>\n      <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"The product must have the minimal properties required (\\"description\\", \\"price\\")"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Take a look at the <a href="/docs/core/errors">Errors Handling guide</a> to learn how API Platform converts PHP exceptions like validation\nerrors to HTTP errors.</p>\n<h2 id="using-validation-groups"><a href="#using-validation-groups" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Validation Groups</h2>\n<p>Without specific configuration, the default validation group is always used, but this behavior is customizable: the framework\nis able to leverage Symfony\'s <a href="http://symfony.com/doc/current/book/validation.html#validation-groups" target="_blank" rel="nofollow noopener noreferrer">validation groups</a>.</p>\n<p>You can configure the groups you want to use when the validation occurs directly through the <code>ApiResource</code> annotation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Book.php</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(attributes={"validation_groups"={"a", "b"}})\n * ...\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Book</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @Assert\\NotBlank(groups={"a"})\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$name</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @Assert\\NotNull(groups={"b"})\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$author</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>With the previous configuration, the validations groups <code>a</code> and <code>b</code> will be used when validation is performed.</p>\n<p>Like for <a href="/docs/core/serialization#using-different-serialization-groups-per-operation">serialization groups</a>,\nyou can specify validation groups globally or on a per operation basis.</p>\n<p>Of course, you can use XML or YAML configuration format instead of annotations if you prefer.</p>\n<p>You may also pass in a <a href="http://symfony.com/doc/current/validation/sequence_provider.html" target="_blank" rel="nofollow noopener noreferrer">group sequence</a> in place of\nthe array of group names.</p>\n<h2 id="dynamic-validation-groups"><a href="#dynamic-validation-groups" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dynamic Validation Groups</h2>\n<p>If you need to dynamically determine which validation groups to use for an entity in different scenarios, just pass in a\n<a href="http://php.net/manual/en/language.types.callable.php" target="_blank" rel="nofollow noopener noreferrer">callable</a>. The callback will receive the entity object as its first\nargument, and should return an array of group names or a <a href="http://symfony.com/doc/current/validation/sequence_provider.html" target="_blank" rel="nofollow noopener noreferrer">group sequence</a>.</p>\n<p>In the following example, we use a static method to return the validation groups:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Book.php</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(\n *     attributes={"validation_groups"={Book::class, "validationGroups"}}\n * )\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Book</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * Return dynamic validation groups.\n     *\n     * @param self $book Contains the instance of Book to validate.\n     *\n     * @return string[]\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">validationGroups</span><span class="token punctuation">(</span>self <span class="token variable">$book</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/**\n     * @Assert\\NotBlank(groups={"a"})\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$name</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @Assert\\NotNull(groups={"b"})\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$author</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Alternatively, you can use a service to retrieve the groups to use:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Validator/AdminGroupsGenerator.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Validator</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Book</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Authorization<span class="token punctuation">\\</span>AuthorizationCheckerInterface</span><span class="token punctuation">;</span>\n\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">AdminGroupsGenerator</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token variable">$authorizationChecker</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span>AuthorizationCheckerInterface <span class="token variable">$authorizationChecker</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">authorizationChecker</span> <span class="token operator">=</span> <span class="token variable">$authorizationChecker</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__invoke</span><span class="token punctuation">(</span>Book <span class="token variable">$book</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">array</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">authorizationChecker</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">isGranted</span><span class="token punctuation">(</span><span class="token string">\'ROLE_ADMIN\'</span><span class="token punctuation">,</span> <span class="token variable">$book</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This class selects the groups to apply regarding the role of the current user: if the current user has the <code>ROLE_ADMIN</code> role, groups <code>a</code> and <code>b</code> are returned. In other cases, just <code>a</code> is returned.</p>\n<p>This class is automatically registered as a service thanks to <a href="https://symfony.com/doc/current/service_container/autowiring.html" target="_blank" rel="nofollow noopener noreferrer">the autowiring feature of the Symfony Dependency Injection Component</a>. Just note that this service must be public.</p>\n<p>Then, configure the entity class to use this service to retrieve validation groups:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Book.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>AdminGroupsGenerator</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(attributes={"validation_groups"=AdminGroupsGenerator::class})\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Book</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @Assert\\NotBlank(groups={"a"})\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$name</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @Assert\\NotNull(groups={"b"})\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$author</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="error-levels-and-payload-serialization"><a href="#error-levels-and-payload-serialization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Error Levels and Payload Serialization</h2>\n<p>As stated in the <a href="https://symfony.com/doc/current/validation/severity.html" target="_blank" rel="nofollow noopener noreferrer">Symfony documentation</a>, you can use the payload field to define error levels.\nYou can retrieve the payload field by setting the <code>serialize_payload_fields</code> option to <code>true</code> in the API Platform config:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/packages/api_platform.yaml</span>\n\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token key atrule">validator</span><span class="token punctuation">:</span>\n        <span class="token key atrule">serialize_payload_fields</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre>\n      </div>\n<p>Then, the serializer will return all payload values in the error response.</p>\n<p>If you want to serialize only some payload fields, define them in the config like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/packages/api_platform.yaml</span>\n\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token key atrule">validator</span><span class="token punctuation">:</span>\n        <span class="token key atrule">serialize_payload_fields</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> severity<span class="token punctuation">,</span> anotherPayloadField <span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>In this example, only <code>severity</code> and <code>anotherPayloadField</code> will be serialized.</p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-different-serialization-groups-per-operation",title:"Using Different Serialization Groups per Operation"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per Item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"errors",title:"Error Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"events",title:"The Event System",anchors:null},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External JSON-LD Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending JSON-LD context",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:'Injecting the Serializer in an "ItemDataProvider"'}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"security",title:"Security",anchors:null},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",
title:"Enabling the Built-in HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"jwt",title:"Adding a JWT authentication using LexikJWTAuthenticationBundle",anchors:[{id:"testing-with-swagger",title:"Testing with Swagger"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"swagger",title:"Swagger Support",anchors:[{id:"override-swagger-documentation",title:"Override Swagger documentation"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:null},{id:"file-upload",title:"Handling File Upload with VichUploaderBundle",anchors:null}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null}]}},{node:{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process",anchors:null},{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/validation",current:{path:"docs/core/validation",title:"The API Component - Validation"},prev:{path:"docs/core/serialization",title:"The Serialization Process",rootPath:"The API Component"},next:{path:"docs/core/errors",title:"Error Handling",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-validation-272f89a00982361bf562.js.map