<template><div :class="mainClass"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/><div class="container-fluid"><div class="row"><nav><div style="margin-top: 60px;" class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#top">Overview</a><ul><li><a href="#header-error-codes">Error codes</a></li></ul></div></div><div class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#wiwi">WiWi</a><ul><li><a href="#wiwi-read-all-enabled-actions-by-domains-get">Actions allowed</a></li><li><a href="#wiwi-read-the-mapping-beetween-action-and-widget-that-can-performed-the-action-get">Group widget by allowed actions</a></li><li><a href="#wiwi-bundles-publised">Bundles publised</a><ul><li><a href="#wiwi-bundles-publised-get">Bundles published</a></li><li><a href="#wiwi-bundles-publised-post">Publish bundle</a></li></ul></li><li><a href="#wiwi-manage-a-bundle-publised">Manage a bundle publised</a><ul><li><a href="#wiwi-manage-a-bundle-publised-get">Bundle information</a></li><li><a href="#wiwi-manage-a-bundle-publised-put">Modify bundle</a></li><li><a href="#wiwi-manage-a-bundle-publised-delete">Remove bundle</a></li></ul></li><li><a href="#wiwi-get-the-bundle-file-of-a-bundle-get">Bundle File</a></li><li><a href="#wiwi-get-the-vendor-file-of-a-bundle-get">Vendor File</a></li></ul></div></div><div class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#workspace">Workspace</a><ul><li><a href="#workspace-read-action-widget-mapping-get">Get all widget - action mapping</a></li></ul></div></div></nav><div class="content"><header><h1 id="top">WiWi</h1></header><p>OpenGate-UX API to allow publish and manage all external widgets</p>
<h2 id="header-error-codes">Error codes <a class="permalink" href="#header-error-codes" aria-hidden="true">¶</a></h2>
<table>
<thead>
<tr>
<th>Code</th>
<th>Message</th>
</tr>
</thead>
<tbody>
<tr>
<td>4000</td>
<td>Workspace ${workspace_id} not found</td>
</tr>
<tr>
<td>4001</td>
<td>Workspace cannot be deleted.</td>
</tr>
<tr>
<td>4100</td>
<td>User domain is not equals to domain in the request</td>
</tr>
<tr>
<td>4101</td>
<td>User profile not allowed</td>
</tr>
<tr>
<td>4102</td>
<td>User not found</td>
</tr>
<tr>
<td>4103</td>
<td>Session not found</td>
</tr>
<tr>
<td>4104</td>
<td>Session expired</td>
</tr>
<tr>
<td>4105</td>
<td>Widget not found</td>
</tr>
<tr>
<td>4106</td>
<td>Widget already exist</td>
</tr>
<tr>
<td>4107</td>
<td>File meta is not attached on request</td>
</tr>
<tr>
<td>4108</td>
<td>Meta file invalid. Widget actions not found into widget definition. Widget actions not found &lt;$widgets_error&gt;, widget loaded &lt;$widget_loaded&gt;</td>
</tr>
<tr>
<td>4109</td>
<td>File vendor is not attached on request</td>
</tr>
<tr>
<td>4110</td>
<td>File bundle is not attached on request</td>
</tr>
<tr>
<td>5000</td>
<td>Internal server error. There are bbdd problems. Please consult with your administrator.</td>
</tr>
</tbody>
</table>
<section id="wiwi" class="resource-group"><h2 class="group-heading">WiWi <a href="#wiwi" class="permalink">&para;</a></h2><p>This collection of endpoints allow you publish/modify/delete/read all widgets that you have accessible into your domain.
Each widget that you publish only could be visible into yours domain.
Only a user with <strong>root</strong>, <strong>admin_domain</strong> or <strong>admin</strong> profiles could publish/modify/delete a widget.</p>
<div id="wiwi-read-all-enabled-actions-by-domains" class="resource"><h3 class="resource-heading">Read all enabled actions by domains <a href="#wiwi-read-all-enabled-actions-by-domains" class="permalink">&nbsp;&para;</a></h3><p>Here we have added the domain name <code>domainName</code> parameter as an
<a href="http://tools.ietf.org/html/rfc6570">URI Template variable</a> in the wiwi
resource’s URI. Note the parameter name <code>domainName</code> is enclosed in curly brackets.</p>
<div id="wiwi-read-all-enabled-actions-by-domains-get" class="action get"><h4 class="action-heading"><div class="name">Actions allowed</div><a href="#wiwi-read-all-enabled-actions-by-domains-get" class="method get">GET</a><code class="uri">/api/wiwi/{domainName}/actions</code></h4><h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/actions</span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">editDevice, createDevice</span>": <span class="hljs-value">[]
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">editDevice, createDevice</span>": <span class="hljs-value">{}
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="wiwi-read-the-mapping-beetween-action-and-widget-that-can-performed-the-action" class="resource"><h3 class="resource-heading">Read the mapping beetween action and widget that can performed the action <a href="#wiwi-read-the-mapping-beetween-action-and-widget-that-can-performed-the-action" class="permalink">&nbsp;&para;</a></h3><p>Here we have added the domain name <code>domainName</code> parameter as an
<a href="http://tools.ietf.org/html/rfc6570">URI Template variable</a> in the wiwi
resource’s URI. Note the parameter name <code>domainName</code> is enclosed in curly brackets.</p>
<div id="wiwi-read-the-mapping-beetween-action-and-widget-that-can-performed-the-action-get" class="action get"><h4 class="action-heading"><div class="name">Group widget by allowed actions</div><a href="#wiwi-read-the-mapping-beetween-action-and-widget-that-can-performed-the-action-get" class="method get">GET</a><code class="uri">/api/wiwi/{domainName}/actions/widgets</code></h4><h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/actions/widgets</span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">editDevice</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_1"</span>,
    <span class="hljs-string">"mi_widget_2"</span>
  ]</span>,
  "<span class="hljs-attribute">createDevice</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_11"</span>,
    <span class="hljs-string">"mi_widget_12"</span>
  ]</span>,
  "<span class="hljs-attribute">createBundle</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_21"</span>,
    <span class="hljs-string">"mi_widget_22"</span>
  ]</span>,
  "<span class="hljs-attribute">executeOperation</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_31"</span>,
    <span class="hljs-string">"mi_widget_32"</span>
  ]</span>,
  "<span class="hljs-attribute">editRuleConfiguration</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_41"</span>,
    <span class="hljs-string">"mi_widget_42"</span>
  ]</span>,
  "<span class="hljs-attribute">createWorkgroup</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_51"</span>,
    <span class="hljs-string">"mi_widget_52"</span>
  ]</span>,
  "<span class="hljs-attribute">createUser</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_61"</span>,
    <span class="hljs-string">"mi_widget_62"</span>
  ]</span>,
  "<span class="hljs-attribute">createCertificateCard</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_71"</span>,
    <span class="hljs-string">"mi_widget_72"</span>
  ]</span>,
  "<span class="hljs-attribute">createChannel</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_81"</span>,
    <span class="hljs-string">"mi_widget_82"</span>
  ]</span>,
  "<span class="hljs-attribute">editDatamodelCard</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_91"</span>,
    <span class="hljs-string">"mi_widget_92"</span>
  ]</span>,
  "<span class="hljs-attribute">alarmOperationWizard</span>": <span class="hljs-value">[
    <span class="hljs-string">"mi_widget_111"</span>,
    <span class="hljs-string">"mi_widget_112"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">editDevice</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createDevice</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createBundle</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">executeOperation</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">editRuleConfiguration</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createWorkgroup</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createUser</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createCertificateCard</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createChannel</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">editDatamodelCard</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">alarmOperationWizard</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="wiwi-bundles-publised" class="resource"><h3 class="resource-heading">Bundles publised <a href="#wiwi-bundles-publised" class="permalink">&nbsp;&para;</a></h3><p>A bundle is defined by a name an two files, bundle file and vendor file.
A bundle can be implemented some widgets for that is necessary specifiy
the list of widgets and their allowed actions when publish a new bundle.
Here we have added the domain name <code>domainName</code> parameter as an
<a href="http://tools.ietf.org/html/rfc6570">URI Template variable</a> in the wiwi
resource’s URI. Note the parameter name <code>domainName</code> is enclosed in curly brackets.</p>
<div id="wiwi-bundles-publised-get" class="action get"><h4 class="action-heading"><div class="name">Bundles published</div><a href="#wiwi-bundles-publised-get" class="method get">GET</a><code class="uri">/api/wiwi/{domainName}/bundles</code></h4><h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/bundles</span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">name_bundle_1, name_bundle_2</span>": <span class="hljs-value">[]
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">name_bundle_1, name_bundle_2</span>": <span class="hljs-value">{}
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>404</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]</span>,
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div></div><div id="wiwi-bundles-publised-post" class="action post"><h4 class="action-heading"><div class="name">Publish bundle</div><a href="#wiwi-bundles-publised-post" class="method post">POST</a><code class="uri">/api/wiwi/{domainName}/bundles</code></h4><h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/bundles</span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">multipart/form-data, boundary=AaB03x</span><br/><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>--AaB03x
content-disposition: form-data; name=<span class="hljs-string">"bundleName"</span>

ouw_bundle_name
--AaB03x
content-disposition: form-data; name=<span class="hljs-string">"meta"</span>; filename=<span class="hljs-string">"meta.json"</span>
Content-Type: application/json

{<span class="hljs-string">"widgets"</span>:[<span class="hljs-string">"customEntityWizard"</span>],<span class="hljs-string">"actions"</span>:{<span class="hljs-string">"editDevice"</span>:[<span class="hljs-string">"customEntityWizard"</span>]}}
--AaB03x--
content-disposition: form-data; name=<span class="hljs-string">"bundle"</span>; filename=<span class="hljs-string">"bundle.js"</span>
Content-Type: application/octet-stream

javascript file content here
--AaB03x--
content-disposition: form-data; name=<span class="hljs-string">"vendor"</span>; filename=<span class="hljs-string">"vendor.js"</span>
Content-Type: application/octet-stream

javascript file content here
--AaB03x--</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>201</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span><br/><span class="hljs-attribute">Location</span>: <span class="hljs-string">/api/wiwi/{domainName}/bundles/mi_bundle_name</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>400</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>500</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-number">5000</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"Internal server error. There are bbdd problems. Please consult with your administrator."</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"number"</span>
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="wiwi-manage-a-bundle-publised" class="resource"><h3 class="resource-heading">Manage a bundle publised <a href="#wiwi-manage-a-bundle-publised" class="permalink">&nbsp;&para;</a></h3><div id="wiwi-manage-a-bundle-publised-get" class="action get"><h4 class="action-heading"><div class="name">Bundle information</div><a href="#wiwi-manage-a-bundle-publised-get" class="method get">GET</a><code class="uri">/api/wiwi/{domainName}/bundles/{bundleName}</code></h4><h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/bundles/<span class="hljs-attribute" title="bundleName">my_bundle</span></span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd><dt>bundleName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_bundle</span></span><p>An unique identifier of the bundle.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">vendor</span>": <span class="hljs-value"><span class="hljs-string">"//localhost:3000/api/wiwi/root/bundles/adf"</span></span>,
  "<span class="hljs-attribute">bundle</span>": <span class="hljs-value"><span class="hljs-string">"//localhost:3000/api/wiwi/root/bundles/adf"</span></span>,
  "<span class="hljs-attribute">widgets</span>": <span class="hljs-value">[
    <span class="hljs-string">"customEntityWizard"</span>
  ]</span>,
  "<span class="hljs-attribute">actions</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">editDevice</span>": <span class="hljs-value">[
      <span class="hljs-string">"customEntityWizard"</span>
    ]
  </span>}
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">vendor</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"widget-custom-entity-wizard/vendor (string,required)"</span>
    </span>}</span>,
    "<span class="hljs-attribute">bundle</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"widget-custom-entity-wizard/bundle (string,required)"</span>
    </span>}</span>,
    "<span class="hljs-attribute">widgets</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
    </span>}</span>,
    "<span class="hljs-attribute">actions</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
      "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
        "<span class="hljs-attribute">editDevice</span>": <span class="hljs-value">{
          "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"array"</span>
        </span>}
      </span>}
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"widgets"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>404</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div><div id="wiwi-manage-a-bundle-publised-put" class="action put"><h4 class="action-heading"><div class="name">Modify bundle</div><a href="#wiwi-manage-a-bundle-publised-put" class="method put">PUT</a><code class="uri">/api/wiwi/{domainName}/bundles/{bundleName}</code></h4><h4>Example URI</h4><div class="definition"><span class="method put">PUT</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/bundles/<span class="hljs-attribute" title="bundleName">my_bundle</span></span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd><dt>bundleName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_bundle</span></span><p>An unique identifier of the bundle.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">multipart/form-data, boundary=AaB03x</span><br/><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>--AaB03x
content-disposition: form-data; name=<span class="hljs-string">"meta"</span>; filename=<span class="hljs-string">"meta.json"</span>
Content-Type: application/json

{<span class="hljs-string">"widgets"</span>:[<span class="hljs-string">"customEntityWizard"</span>],<span class="hljs-string">"actions"</span>:{<span class="hljs-string">"editDevice"</span>:[<span class="hljs-string">"customEntityWizard"</span>]}}
--AaB03x--
content-disposition: form-data; name=<span class="hljs-string">"bundle"</span>; filename=<span class="hljs-string">"bundle.js"</span>
Content-Type: application/octet-stream

javascript file content here
--AaB03x--
content-disposition: form-data; name=<span class="hljs-string">"vendor"</span>; filename=<span class="hljs-string">"vendor.js"</span>
Content-Type: application/octet-stream

javascript file content here
--AaB03x--</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>400</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>500</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div><div id="wiwi-manage-a-bundle-publised-delete" class="action delete"><h4 class="action-heading"><div class="name">Remove bundle</div><a href="#wiwi-manage-a-bundle-publised-delete" class="method delete">DELETE</a><code class="uri">/api/wiwi/{domainName}/bundles/{bundleName}</code></h4><h4>Example URI</h4><div class="definition"><span class="method delete">DELETE</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/bundles/<span class="hljs-attribute" title="bundleName">my_bundle</span></span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd><dt>bundleName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_bundle</span></span><p>An unique identifier of the bundle.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>500</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="wiwi-get-the-bundle-file-of-a-bundle" class="resource"><h3 class="resource-heading">Get the bundle file of a bundle <a href="#wiwi-get-the-bundle-file-of-a-bundle" class="permalink">&nbsp;&para;</a></h3><div id="wiwi-get-the-bundle-file-of-a-bundle-get" class="action get"><h4 class="action-heading"><div class="name">Bundle File</div><a href="#wiwi-get-the-bundle-file-of-a-bundle-get" class="method get">GET</a><code class="uri">/api/wiwi/{domainName}/bundles/{bundleName}/bundle</code></h4><h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/bundles/<span class="hljs-attribute" title="bundleName">my_bundle</span>/bundle</span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd><dt>bundleName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_bundle</span></span><p>An unique identifier of the bundle.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>404</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]</span>,
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="wiwi-get-the-vendor-file-of-a-bundle" class="resource"><h3 class="resource-heading">Get the vendor file of a bundle <a href="#wiwi-get-the-vendor-file-of-a-bundle" class="permalink">&nbsp;&para;</a></h3><div id="wiwi-get-the-vendor-file-of-a-bundle-get" class="action get"><h4 class="action-heading"><div class="name">Vendor File</div><a href="#wiwi-get-the-vendor-file-of-a-bundle-get" class="method get">GET</a><code class="uri">/api/wiwi/{domainName}/bundles/{bundleName}/vendor</code></h4><h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/wiwi/<span class="hljs-attribute" title="domainName">my_domain</span>/bundles/<span class="hljs-attribute" title="bundleName">my_bundle</span>/vendor</span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>domainName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_domain</span></span><p>An unique identifier of the domain.</p>
</dd><dt>bundleName</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>my_bundle</span></span><p>An unique identifier of the bundle.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong></div><div class="title"><strong>Response&nbsp;&nbsp;<code>401</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>404</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]</span>,
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div></section><section id="workspace" class="resource-group"><h2 class="group-heading">Workspace <a href="#workspace" class="permalink">&para;</a></h2><p>This collection of endpoints is used to read/configure which widgets will be open when each action is performed</p>
<div id="workspace-read-action-widget-mapping" class="resource"><h3 class="resource-heading">Read action-widget mapping <a href="#workspace-read-action-widget-mapping" class="permalink">&nbsp;&para;</a></h3><p>Here we have added the workspace <code>id</code> parameter as an
<a href="http://tools.ietf.org/html/rfc6570">URI Template variable</a> in the Worspace
resource’s URI. Note the parameter name <code>id</code> is enclosed in curly brackets.</p>
<div id="workspace-read-action-widget-mapping-get" class="action get"><h4 class="action-heading"><div class="name">Get all widget - action mapping</div><a href="#workspace-read-action-widget-mapping-get" class="method get">GET</a><code class="uri">/api/workspaces/{workspaceId}/widgetByAction</code></h4><h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname"></span>/api/workspaces/<span class="hljs-attribute" title="workspaceId">_my.user@gmail.com_default</span>/widgetByAction</span></div><div class="title"><strong>URI Parameters</strong><div class="collapse-button show"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><dl class="inner"><dt>workspaceId</dt><dd><code>string</code>&nbsp;<span class="required">(required)</span>&nbsp;<span class="text-muted example"><strong>Example:&nbsp;</strong><span>_my.user@gmail.com_default</span></span><p>An unique identifier of the workspace.</p>
</dd></dl></div><div class="title"><strong>Request</strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Cookie</span>: <span class="hljs-string">['sessionId']</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">editDevice</span>": <span class="hljs-value"><span class="hljs-string">"editDevice"</span></span>,
  "<span class="hljs-attribute">createDevice</span>": <span class="hljs-value"><span class="hljs-string">"createDevice"</span></span>,
  "<span class="hljs-attribute">createBundle</span>": <span class="hljs-value"><span class="hljs-string">"createBundle"</span></span>,
  "<span class="hljs-attribute">executeOperation</span>": <span class="hljs-value"><span class="hljs-string">"executeOperation"</span></span>,
  "<span class="hljs-attribute">editRuleConfiguration</span>": <span class="hljs-value"><span class="hljs-string">"customEditRuleConfiguration"</span></span>,
  "<span class="hljs-attribute">createWorkgroup</span>": <span class="hljs-value"><span class="hljs-string">"custoCcreateWorkgroup"</span></span>,
  "<span class="hljs-attribute">createUser</span>": <span class="hljs-value"><span class="hljs-string">"customCreateUser"</span></span>,
  "<span class="hljs-attribute">createCertificateCard</span>": <span class="hljs-value"><span class="hljs-string">"customCreateCertificateCard"</span></span>,
  "<span class="hljs-attribute">createChannel</span>": <span class="hljs-value"><span class="hljs-string">"customCreateChannel"</span></span>,
  "<span class="hljs-attribute">editDatamodelCard</span>": <span class="hljs-value"><span class="hljs-string">"customeEditDatamodelCard"</span></span>,
  "<span class="hljs-attribute">alarmOperationWizard</span>": <span class="hljs-value"><span class="hljs-string">"customAlarmOperationWizard"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">editDevice</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createDevice</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createBundle</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">executeOperation</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">editRuleConfiguration</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createWorkgroup</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createUser</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createCertificateCard</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">createChannel</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">editDatamodelCard</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}</span>,
    "<span class="hljs-attribute">alarmOperationWizard</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>400</code></strong><div class="collapse-button"><span class="close">Hide</span><span class="open">Show</span></div></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"4000"</span></span>,
  "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">"User domain is not equals to domain in the request"</span>
</span>}</code></pre><div style="height: 1px;"></div><h5>Schema</h5><pre><code>{
  "<span class="hljs-attribute">$schema</span>": <span class="hljs-value"><span class="hljs-string">"http://json-schema.org/draft-04/schema#"</span></span>,
  "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"object"</span></span>,
  "<span class="hljs-attribute">properties</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">code</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span></span>,
      "<span class="hljs-attribute">enum</span>": <span class="hljs-value">[
        <span class="hljs-string">"4000"</span>,
        <span class="hljs-string">"4001"</span>,
        <span class="hljs-string">"4100"</span>,
        <span class="hljs-string">"4101"</span>,
        <span class="hljs-string">"4102"</span>,
        <span class="hljs-string">"4103"</span>,
        <span class="hljs-string">"4104"</span>,
        <span class="hljs-string">"4105"</span>,
        <span class="hljs-string">"4106"</span>,
        <span class="hljs-string">"4107"</span>,
        <span class="hljs-string">"4108"</span>,
        <span class="hljs-string">"4109"</span>,
        <span class="hljs-string">"4110"</span>
      ]
    </span>}</span>,
    "<span class="hljs-attribute">message</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"string"</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">required</span>": <span class="hljs-value">[
    <span class="hljs-string">"code"</span>,
    <span class="hljs-string">"message"</span>
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div></section></div></div></div></div></template><script>export default {
  name: 'wapi-doc',
  data(){
      return {
        mainClass:'preload'
      }
  },
  mounted() {
    init()
    autoCollapse()
    this.mainClass=''
  },
  methods: {},
}

/*
  Determine if a string ends with another string.
*/
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1
}

/*
  Get a list of direct child elements by class name.
*/
function childrenByClass(element, name) {
  var filtered = []

  for (var i = 0; i < element.children.length; i++) {
    var child = element.children[i]
    var classNames = child.className.split(' ')
    if (classNames.indexOf(name) !== -1) {
      filtered.push(child)
    }
  }

  return filtered
}

/*
  Get an array [width, height] of the window.
*/
function getWindowDimensions() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.body,
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight

  return [x, y]
}

/*
  Collapse or show a request/response example.
*/
function toggleCollapseButton(event) {
  var button = event.target.parentNode
  var content = button.parentNode.nextSibling
  var inner = content.children[0]

  if (button.className.indexOf('collapse-button') === -1) {
    // Clicked without hitting the right element?
    return
  }

  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    // Currently showing, so let's hide it
    button.className = 'collapse-button'
    content.style.maxHeight = '0px'
  } else {
    // Currently hidden, so let's show it
    button.className = 'collapse-button show'
    content.style.maxHeight = inner.offsetHeight + 12 + 'px'
  }
}

function toggleTabButton(event) {
  var i, index
  var button = event.target

  // Get index of the current button.
  var buttons = childrenByClass(button.parentNode, 'tab-button')
  for (i = 0; i < buttons.length; i++) {
    if (buttons[i] === button) {
      index = i
      button.className = 'tab-button active'
    } else {
      buttons[i].className = 'tab-button'
    }
  }

  // Hide other tabs and show this one.
  var tabs = childrenByClass(button.parentNode.parentNode, 'tab')
  for (i = 0; i < tabs.length; i++) {
    if (i === index) {
      tabs[i].style.display = 'block'
    } else {
      tabs[i].style.display = 'none'
    }
  }
}

/*
  Collapse or show a navigation menu. It will not be hidden unless it
  is currently selected or `force` has been passed.
*/
function toggleCollapseNav(event, force) {
  var heading = event.target.parentNode
  var content = heading.nextSibling
  var inner = content.children[0]

  if (heading.className.indexOf('heading') === -1) {
    // Clicked without hitting the right element?
    return
  }

  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    // Currently showing, so let's hide it, but only if this nav item
    // is already selected. This prevents newly selected items from
    // collapsing in an annoying fashion.
    if (
      force ||
      (window.location.hash &&
        endsWith(event.target.href, window.location.hash))
    ) {
      content.style.maxHeight = '0px'
    }
  } else {
    // Currently hidden, so let's show it
    content.style.maxHeight = inner.offsetHeight + 12 + 'px'
  }
}

/*
  Determine which navigation items should be auto-collapsed to show as many
  as possible on the screen, based on the current window height. This also
  collapses them.
*/
function autoCollapse() {
  var windowHeight = getWindowDimensions()[1]
  var itemsHeight = 64 /* Account for some padding */
  var itemsArray = Array.prototype.slice.call(
    document.querySelectorAll('nav .resource-group .heading')
  )

  // Get the total height of the navigation items
  itemsArray.forEach(function (item) {
    itemsHeight += item.parentNode.offsetHeight
  })

  // Should we auto-collapse any nav items? Try to find the smallest item
  // that can be collapsed to show all items on the screen. If not possible,
  // then collapse the largest item and do it again. First, sort the items
  // by height from smallest to largest.
  var sortedItems = itemsArray.sort(function (a, b) {
    return a.parentNode.offsetHeight - b.parentNode.offsetHeight
  })

  while (sortedItems.length && itemsHeight > windowHeight) {
    for (var i = 0; i < sortedItems.length; i++) {
      // Will collapsing this item help?
      var itemHeight = sortedItems[i].nextSibling.offsetHeight
      if (
        itemsHeight - itemHeight <= windowHeight ||
        i === sortedItems.length - 1
      ) {
        // It will, so let's collapse it, remove its content height from
        // our total and then remove it from our list of candidates
        // that can be collapsed.
        itemsHeight -= itemHeight
        toggleCollapseNav({ target: sortedItems[i].children[0] }, true)
        sortedItems.splice(i, 1)
        break
      }
    }
  }
}

/*
  Initialize the interactive functionality of the page.
*/
function init() {
  var i, j

  // Make collapse buttons clickable
  var buttons = document.querySelectorAll('.collapse-button')
  for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = toggleCollapseButton

    // Show by default? Then toggle now.
    if (buttons[i].className.indexOf('show') !== -1) {
      toggleCollapseButton({ target: buttons[i].children[0] })
    }
  }

  var responseCodes = document.querySelectorAll('.example-names')
  for (i = 0; i < responseCodes.length; i++) {
    var tabButtons = childrenByClass(responseCodes[i], 'tab-button')
    for (j = 0; j < tabButtons.length; j++) {
      tabButtons[j].onclick = toggleTabButton

      // Show by default?
      if (j === 0) {
        toggleTabButton({ target: tabButtons[j] })
      }
    }
  }

  // Make nav items clickable to collapse/expand their content.
  var navItems = document.querySelectorAll('nav .resource-group .heading')
  for (i = 0; i < navItems.length; i++) {
    navItems[i].onclick = toggleCollapseNav

    // Show all by default
    toggleCollapseNav({ target: navItems[i].children[0] })
  }
}
</script><style scoped="scoped">@import url('https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata|Raleway:200');@import url('https://fonts.googleapis.com/css?family=Roboto:100,400,700|Source+Code+Pro');.hljs-comment,.hljs-title{color:#8e908c}.hljs-variable,.hljs-attribute,.hljs-tag,.hljs-regexp,.ruby .hljs-constant,.xml .hljs-tag .hljs-title,.xml .hljs-pi,.xml .hljs-doctype,.html .hljs-doctype,.css .hljs-id,.css .hljs-class,.css .hljs-pseudo{color:#c82829}.hljs-number,.hljs-preprocessor,.hljs-pragma,.hljs-built_in,.hljs-literal,.hljs-params,.hljs-constant{color:#f5871f}.ruby .hljs-class .hljs-title,.css .hljs-rules .hljs-attribute{color:#eab700}.hljs-string,.hljs-value,.hljs-inheritance,.hljs-header,.ruby .hljs-symbol,.xml .hljs-cdata{color:#718c00}.css .hljs-hexcolor{color:#3e999f}.hljs-function,.python .hljs-decorator,.python .hljs-title,.ruby .hljs-function .hljs-title,.ruby .hljs-title .hljs-keyword,.perl .hljs-sub,.javascript .hljs-title,.coffeescript .hljs-title{color:#4271ae}.hljs-keyword,.javascript .hljs-function{color:#8959a8}.hljs{display:block;background:white;color:#4d4d4c;padding:.5em}.coffeescript .javascript,.javascript .xml,.tex .hljs-formula,.xml .javascript,.xml .vbscript,.xml .css,.xml .hljs-cdata{opacity:.5}.right .hljs-comment{color:#969896}.right .css .hljs-class,.right .css .hljs-id,.right .css .hljs-pseudo,.right .hljs-attribute,.right .hljs-regexp,.right .hljs-tag,.right .hljs-variable,.right .html .hljs-doctype,.right .ruby .hljs-constant,.right .xml .hljs-doctype,.right .xml .hljs-pi,.right .xml .hljs-tag .hljs-title{color:#c66}.right .hljs-built_in,.right .hljs-constant,.right .hljs-literal,.right .hljs-number,.right .hljs-params,.right .hljs-pragma,.right .hljs-preprocessor{color:#de935f}.right .css .hljs-rule .hljs-attribute,.right .ruby .hljs-class .hljs-title{color:#f0c674}.right .hljs-header,.right .hljs-inheritance,.right .hljs-name,.right .hljs-string,.right .hljs-value,.right .ruby .hljs-symbol,.right .xml .hljs-cdata{color:#b5bd68}.right .css .hljs-hexcolor,.right .hljs-title{color:#8abeb7}.right .coffeescript .hljs-title,.right .hljs-function,.right .javascript .hljs-title,.right .perl .hljs-sub,.right .python .hljs-decorator,.right .python .hljs-title,.right .ruby .hljs-function .hljs-title,.right .ruby .hljs-title .hljs-keyword{color:#81a2be}.right .hljs-keyword,.right .javascript .hljs-function{color:#b294bb}.right .hljs{display:block;overflow-x:auto;background:#1d1f21;color:#c5c8c6;padding:.5em;-webkit-text-size-adjust:none}.right .coffeescript .javascript,.right .javascript .xml,.right .tex .hljs-formula,.right .xml .css,.right .xml .hljs-cdata,.right .xml .javascript,.right .xml .vbscript{opacity:.5}nav .resource-group .heading a{padding:0 !important;font-weight:bold !important}body{color:black;background:white;font:400 14px / 1.42 'Roboto',Helvetica,sans-serif}header{border-bottom:1px solid transparent;margin-bottom:12px}h1,h2,h3,h4,h5{color:#292e31;margin:12px 0}h1 .permalink,h2 .permalink,h3 .permalink,h4 .permalink,h5 .permalink{margin-left:0;opacity:0;transition:opacity .25s ease}h1:hover .permalink,h2:hover .permalink,h3:hover .permalink,h4:hover .permalink,h5:hover .permalink{opacity:1}.triple h1 .permalink,.triple h2 .permalink,.triple h3 .permalink,.triple h4 .permalink,.triple h5 .permalink{opacity:.15}.triple h1:hover .permalink,.triple h2:hover .permalink,.triple h3:hover .permalink,.triple h4:hover .permalink,.triple h5:hover .permalink{opacity:.15}h1{font:200 36px 'Raleway',Helvetica,sans-serif;font-size:36px}h2{font:200 36px 'Raleway',Helvetica,sans-serif;font-size:30px}h3{font-size:100%;text-transform:uppercase}h5{font-size:100%;font-weight:normal}p{margin:0 0 10px}p.choices{line-height:1.6}a{color:#0099e5;text-decoration:none}li p{margin:0}hr.split{border:0;height:1px;width:100%;padding-left:6px;margin:12px auto;background-image:linear-gradient(to right, rgba(0,0,0,0) 20%, rgba(0,0,0,0.2) 48%, rgba(221,228,232,0.2) 48%, rgba(221,228,232,0) 80%)}dl dt{float:left;width:130px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}dl dd{margin-left:150px}blockquote{color:rgba(0,0,0,0.5);font-size:15.5px;padding:10px 20px;margin:12px 0;border-left:5px solid #e8e8e8}blockquote p:last-child{margin-bottom:0}pre{background-color:#f5f5f5;padding:12px;border:1px solid #cfcfcf;border-radius:3px;overflow:auto}pre code{color:black;background-color:transparent;padding:0;border:none}code{color:#b93d6a;background-color:#f5f5f5;font:'Inconsolata',monospace;padding:1px 4px;border:1px solid #cfcfcf;border-radius:3px}ul,ol{padding-left:2em}table{border-collapse:collapse;border-spacing:0;margin-bottom:12px}table tr:nth-child(2n){background-color:#fafafa}table th,table td{padding:6px 12px;border:1px solid #e6e6e6}.text-muted{opacity:.5}.note,.warning{padding:.3em 1em;margin:1em 0;border-radius:2px;font-size:90%}.note h1,.warning h1,.note h2,.warning h2,.note h3,.warning h3,.note h4,.warning h4,.note h5,.warning h5,.note h6,.warning h6{font-family:200 36px 'Raleway',Helvetica,sans-serif;font-size:135%;font-weight:500}.note p,.warning p{margin:.5em 0}.note{color:black;background-color:#ebf7fd;border-left:4px solid #0099e5}.note h1,.note h2,.note h3,.note h4,.note h5,.note h6{color:#0099e5}.warning{color:black;background-color:#faf0f4;border-left:4px solid #B82E5F}.warning h1,.warning h2,.warning h3,.warning h4,.warning h5,.warning h6{color:#B82E5F}header{margin-top:24px}nav{position:fixed;top:24px;bottom:0;overflow-y:auto}nav .resource-group{padding:0}nav .resource-group .heading{position:relative}nav .resource-group .heading .chevron{position:absolute;top:12px;right:12px;opacity:.5}nav .resource-group .heading a{display:block;color:black;opacity:.7;border-left:2px solid transparent;margin:0}nav .resource-group .heading a:hover{text-decoration:underline;background-color:transparent;border-left:2px solid transparent}nav ul{list-style-type:none;padding-left:0}nav ul a{display:block;font-size:13px;color:rgba(0,0,0,0.7);padding:8px 12px;border-top:1px solid transparent;border-left:2px solid transparent;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}nav ul a:hover{text-decoration:underline;background-color:transparent;border-left:2px solid transparent}nav ul>li{margin:0}nav ul>li:first-child{margin-top:-12px}nav ul>li:last-child{margin-bottom:-12px}nav ul ul a{padding-left:24px}nav ul ul li{margin:0}nav ul ul li:first-child{margin-top:0}nav ul ul li:last-child{margin-bottom:0}nav>div>div>ul>li:first-child>a{border-top:none}.preload *{transition:none !important}.pull-left{float:left}.pull-right{float:right}.badge{display:inline-block;float:right;min-width:10px;min-height:14px;padding:3px 7px;font-size:12px;color:black;background-color:transparent;border-radius:10px;margin:-2px 0}.badge.get{color:#fff;background-color:#ddf1fc}.badge.head{color:#fff;background-color:#ddf1fc}.badge.options{color:#fff;background-color:#ddf1fc}.badge.put{color:#fff;background-color:#f7f2c3}.badge.patch{color:#fff;background-color:#f7f2c3}.badge.post{color:#fff;background-color:#e4f2c8}.badge.delete{color:#fff;background-color:#f2d8e1}.collapse-button{float:right}.collapse-button .close{display:none;color:#0099e5;cursor:pointer}.collapse-button .open{color:#0099e5;cursor:pointer}.collapse-button.show .close{display:inline}.collapse-button.show .open{display:none}.collapse-content{max-height:0;overflow:hidden;transition:max-height .3s ease-in-out}nav{width:220px}.container{max-width:940px;margin-left:auto;margin-right:auto}.container .row .content{margin-left:244px;width:696px}.container .row:after{content:'';display:block;clear:both}.container-fluid nav{width:22%}.container-fluid .row .content{margin-left:24%}.container-fluid.triple nav{width:15%;padding-right:1px}.container-fluid.triple .row .content{position:relative;margin-left:15%;padding-left:24px}.middle:before,.middle:after{content:'';display:table}.middle:after{clear:both}.middle{box-sizing:border-box;width:48%;padding-right:12px}.right{box-sizing:border-box;float:right;width:52%;padding-left:12px}.right a{color:#0099e5}.right h1,.right h2,.right h3,.right h4,.right h5,.right p,.right div{color:#dde4e8}.right pre{background-color:#272B2D;border:1px solid #272B2D}.right pre code{color:#D0D0D0}.right .description{margin-top:12px}.triple .resource-heading{font-size:125%}.definition{margin-top:12px;margin-bottom:12px}.definition .method{font-weight:bold}.definition .method.get{color:#2e8ab8}.definition .method.head{color:#2e8ab8}.definition .method.options{color:#2e8ab8}.definition .method.post{color:#8ab82e}.definition .method.put{color:#b8aa2e}.definition .method.patch{color:#b8aa2e}.definition .method.delete{color:#b82e5f}.definition .uri{word-break:break-all;word-wrap:break-word}.definition .hostname{opacity:.5}.example-names{background-color:#eee;padding:12px;border-radius:3px}.example-names .tab-button{cursor:pointer;color:black;border:1px solid #ddd;padding:6px;margin-left:12px}.example-names .tab-button.active{background-color:#d5d5d5}.right .example-names{background-color:#424648}.right .example-names .tab-button{color:#dde4e8;border:1px solid #6C6F71;border-radius:3px}.right .example-names .tab-button.active{background-color:#5a6063}#nav-background{position:fixed;left:0;top:0;bottom:0;width:15%;padding-right:14.4px;background-color:#fafcfc;border-right:1px solid #f0f4f7;z-index:-1}#right-panel-background{position:absolute;right:-12px;top:-12px;bottom:-12px;width:52%;background-color:#2d3134;z-index:-1}@media (max-width:1200px){nav{width:198px}.container{max-width:840px}.container .row .content{margin-left:224px;width:606px}}@media (max-width:992px){nav{width:169.4px}.container{max-width:720px}.container .row .content{margin-left:194px;width:526px}}@media (max-width:768px){nav{display:none}.container{width:95%;max-width:none}.container .row .content,.container-fluid .row .content,.container-fluid.triple .row .content{margin-left:auto;margin-right:auto;width:95%}#nav-background{display:none}#right-panel-background{width:52%}}.back-to-top{position:fixed;z-index:1;bottom:0;right:24px;padding:4px 8px;color:rgba(0,0,0,0.5);background-color:transparent;text-decoration:none !important;border-top:1px solid transparent;border-left:1px solid transparent;border-right:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.resource-group{padding:12px 12px 12px 0;margin-bottom:12px;background-color:transparent;border:1px solid transparent;border-radius:3px}.resource-group h2.group-heading,.resource-group .heading a{padding:12px 12px 12px 0;margin:0 0 12px 0;background-color:transparent;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.triple .content .resource-group{padding:0;border:none}.triple .content .resource-group h2.group-heading,.triple .content .resource-group .heading a{margin:0 0 12px 0;border:1px solid transparent}nav .resource-group .heading a{padding:12px;margin-bottom:0}nav .resource-group .collapse-content{padding:0}.action{margin-bottom:12px;padding:12px 12px 0 12px;overflow:hidden;border:1px solid transparent;border-radius:3px}.action h4.action-heading{padding:6px 12px;margin:-12px -12px 12px -12px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px;overflow:hidden}.action h4.action-heading .name{float:right;font-weight:normal;padding:6px 0}.action h4.action-heading .method{padding:6px 12px;margin-right:12px;border-radius:2px;display:inline-block}.action h4.action-heading .method.get{color:#fff;background-color:#0099e5}.action h4.action-heading .method.head{color:#fff;background-color:#0099e5}.action h4.action-heading .method.options{color:#fff;background-color:#0099e5}.action h4.action-heading .method.put{color:#fff;background-color:#b1a74e}.action h4.action-heading .method.patch{color:#fff;background-color:#b1a74e}.action h4.action-heading .method.post{color:#fff;background-color:#85a546}.action h4.action-heading .method.delete{color:#fff;background-color:#c14a74}.action h4.action-heading code{color:#444;background-color:#f5f5f5;border-color:#cfcfcf;font-weight:normal;word-break:break-all;display:inline-block;margin-top:2px}.action dl.inner{padding-bottom:2px}.action .title{border-bottom:1px solid transparent;margin:0 -12px -1px -12px;padding:12px}.action.get{border-color:#ddf1fc}.action.get h4.action-heading{color:#0099e5;background:#ddf1fc;border-bottom-color:#ddf1fc}.action.head{border-color:#ddf1fc}.action.head h4.action-heading{color:#0099e5;background:#ddf1fc;border-bottom-color:#ddf1fc}.action.options{border-color:#ddf1fc}.action.options h4.action-heading{color:#0099e5;background:#ddf1fc;border-bottom-color:#ddf1fc}.action.post{border-color:#e4f2c8}.action.post h4.action-heading{color:#85a546;background:#e4f2c8;border-bottom-color:#e4f2c8}.action.put{border-color:#f7f2c3}.action.put h4.action-heading{color:#b1a74e;background:#f7f2c3;border-bottom-color:#f7f2c3}.action.patch{border-color:#f7f2c3}.action.patch h4.action-heading{color:#b1a74e;background:#f7f2c3;border-bottom-color:#f7f2c3}.action.delete{border-color:#f2d8e1}.action.delete h4.action-heading{color:#c14a74;background:#f2d8e1;border-bottom-color:#f2d8e1}</style>