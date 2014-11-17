---
title: Project
---

### Versioning

{{site.name}} uses a simple versioning system:

{{site.project}}-A.B.C.jar

- C - Critical bug resolutions.
- B - Feature added + bug resolutions.
- A - Tons of features or public API change.

### Download

We deploy our jars to Maven Central Repository, so you can easily add it as dependency:

#### Gradle

    dependencies {
        '{{site.group-id}}:{{site.project}}:{{site.last_release}}'
    }

#### SBT

    libraryDependencies += "{{site.group-id}}" % "{{site.project}}" % "{{site.last_release}}"

#### Ivy

    <dependency org="{{site.group-id}}" name="{{site.project}}" rev="{{site.last_release}}"/>

#### Maven 

    <dependency>
        <groupId>{{site.group-id}}</groupId>
        <artifactId>{{site.project}}</artifactId>
        <version>{{site.last_release}}</version>
    </dependency>


#### Source
Browse and checkout our sources at [Github](http://github.com/{{site.organization}}/{{site.project}}/).

### Email Lists

- Users Mailing list: http://groups.google.com/group/vidageek-users
    - Doubts about how to use {{site.name}} should come here.
- Development Mailing list: http://groups.google.com/group/vidageek-dev
    - Discussions on new features or bugs.

### Bugtracker

Just go to [Github](http://github.com/{{site.organization}}/{{site.project}}/issues) and don't be ashamed of creating a new ticket!

### Project Contributors

<div id="contributors"></div>

### Get Involved

You can get involved to {{site.name}} in a lot of ways. If you are just using it, you are already really helping us. 

Patches of any kind (source, documentation, etc) are always welcome. You can send your patches through our 
bugtracking system. Another way you can help is by answering new user's questions on our mailing lists and 
also by giving us your feedback. 

You can even translate {{site.name}} documentation to your native language and help 
us spreading the project around the world.
