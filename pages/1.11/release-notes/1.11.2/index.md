---
layout: layout.pug
navigationTitle: Release Notes for 1.11.2
title: Release Notes for 1.11.2
menuWeight: 0
excerpt: Release notes for DC/OS 1.11.2
---

These are the release notes for DC/OS 1.11.2.

[button color="purple" href="https://downloads.dcos.io/dcos/stable/1.11.2/dcos_generate_config.sh"]Download DC/OS Open Source[/button]

[button color="light" href="https://support.mesosphere.com/hc/en-us/articles/213198586"]Download DC/OS Enterprise[/button]

DC/OS 1.11.2 includes the following:

- Apache Mesos 1.5.1-dev [change log](https://github.com/mesosphere/mesos/blob/27d91e1fe46f09b2c74f2dc4efe4f58ae59ae0a8/CHANGELOG).
- Marathon 1.6.392 [change log](https://github.com/mesosphere/marathon/releases).
- Metronome 0.4.2 [change log](https://github.com/dcos/metronome/releases/tag/v0.4.2).


# Issues Fixed in DC/OS 1.11.2

- DCOS-14199 - Consolidated the Exhibitor bootstrapping shortcut by atomically reading and writing the ZooKeeper PID file.
- DCOS-20514 - Added licensing information to the diagnostics bundle.
- DCOS-21596 - Added local user to LDAP group if local username matches LDAP username. [enterprise type="inline" size="small" /]
- DCOS-22128 - Supported pods with volumes but no volume mounts. [enterprise type="inline" size="small" /]
- DCOS_OSS-2360 - DC/OS Metrics: metric names are sanitized for better compatibility with Prometheus.
- DCOS_OSS-2378 - DC/OS Net: Improved stability of distribution protocol over TLS. [enterprise type="inline" size="small" /]
- DC/OS UI: Incorporated [multiple](https://github.com/dcos/dcos/pull/2799) fixes and improvements.


# Notable Changes in DC/OS 1.11.2

- DCOS-21958 - Admin Router on the DC/OS master nodes now does not support TLS 1.1 and the 3DES bulk encryption algorithm anymore by default.
- DCOS-22326 - Disabled the insecure 3DES bulk encryption algorithm and TLS 1.1 protocol by default for Master Admin Router. [enterprise type="inline" size="small" /] 
- DCOS-29122 - Support for launching services in a remote region.
- DCOS-29634 - Implement region validation and config-sniffing in SDK.
- DCOS_OSS-2377 - Agent operator API: Displayed resource provider resources in GET_RESOURCE_PROVIDER response.
- QUALITY-2006 - RHEL 7.4 with Docker EE 17.06.2 is supported.
- QUALITY-2007 - RHEL 7.4 with Docker 17.12.1-ce is supported. 
- QUALITY-2057 - CentOS 7.4 with Docker EE 17.06.2 is supported.
- QUALITY-2060 - Certified DC/OS 1.11.2 with CoreOS 1688.5.3.

**Note:** 
1. Previous 1.11 point releases are not supported for CoreOS 1688.5.3.

2. Implemented region awareness support for SDK based services are implemented in this release. [enterprise type="inline" size="small" /]

3. New Docker versions supported on RHEL 7.4 and CoreOS 1688.5.3. See [compatibility matrix](https://docs.mesosphere.com/version-policy/) for further information.


# About DC/OS 1.11

DC/OS 1.11 includes many new capabilities, with a focus on:
- Managing clusters across multiple clouds [enterprise type="inline" size="small" /]
- Production Kubernetes-as-a-service
- Enhanced data security [enterprise type="inline" size="small" /]
- Updated data services

Provide feedback on the new features and services at: [support.mesosphere.com](https://support.mesosphere.com).


## New Features and Capabilities

### Platform
- Multi-region management - Enables a DC/OS Cluster to span multiple datacenters, clouds, and remote branches while providing a unified management and control cluster. [View the documentation](/1.11/deploying-services/fault-domain-awareness). [enterprise type="inline" size="small" /]
- Linked clusters - A cluster link is a unidirectional relationship between a cluster and another cluster. You add and remove links from one cluster to another cluster using the DC/OS CLI. Once a link is set up, you can easily switch between clusters using the CLI or UI. [View the documentation](/1.11/administering-clusters/multiple-clusters/cluster-links). [enterprise type="inline" size="small" /]
- Fault domain awareness - Use fault domain awareness to make your services highly available and to allow for increased capacity when needed. [View the documentation](/1.11/deploying-services/fault-domain-awareness). [enterprise type="inline" size="small" /]
- Decommission node - Support for permanently decommissioning nodes makes it easier to manage “spot” cloud instances, allowing for immediate task rescheduling.
- UCR
  - Support for Docker image garbage collection. [View the documentation](/1.11/deploying-services/containerizers).
  - Support for Docker image pull secrets. [enterprise type="inline" size="small" /]

### Networking
- Edge-LB 1.0. [View the documentation](https://docs.mesosphere.com/services/edge-lb/1.0/) [enterprise type="inline" size="small" /]
- IPv6 is now supported for Docker containers.
- Performance improvements to the DC/OS network stack - All networking components (minuteman, navstar, spartan) are aggregated into a single systemd unit called `dcos-net`.  Read this [note](/1.11/networking/#a-note-on-software-re-architecture) to learn more about the re-factoring of the network stack.
- The configuration parameter `dns_forward_zones` now takes a list of objects instead of nested lists ([DCOS_OSS-1733](https://jira.mesosphere.com/browse/DCOS_OSS-1733)). [View the documentation](/1.11/installing/oss/custom/configuration/configuration-parameters/#dns-forward-zones) to understand its usage.

[enterprise]
### Security
[/enterprise]
- Secrets Management Service
  - Binary Secret files are supported now.
  - Hierarchical access control is supported now.

### Monitoring
- The DC/OS metrics component now produces metrics in [Prometheus](https://prometheus.io/docs/instrumenting/exposition_formats/) format. [View the documentation](/1.11/metrics).
- Unified logging API provides simple access to container (task) and system component logs. [View the documentation](/1.11/monitoring/logging/logging-api/logging-v2/).

### Storage
- DC/OS Storage Service 0.1 (beta) - DSS users will be able to dynamically create volumes based upon profiles or policies to fine-tune their applications storage requirements. This feature leverages the industry-standard Container Storage Interface (CSI) to streamline the development of storage features in DC/OS by Mesosphere and our community and partner ecosystems. [View the documentation](https://docs.mesosphere.com/services/beta-storage/0.1.0-beta/).[beta type="inline" size="small" /][enterprise type="inline" size="small" /]
- Pods now support persistent volumes. [View the documentation](/1.11/deploying-services/pods).[beta type="inline" size="small" /]

**Note:** Because these storage features are beta in 1.11, they must be explicitly enabled. Beta features are not recommended for production usage, but are a good indication of the direction the project is headed.

### Updated DC/OS Data Services
- TLS encryption for DC/OS Kafka, DC/OS Cassandra, DC/OS Elastic, and DC/OS HDFS is now supported. [enterprise type="inline" size="small" /]
- Fault domain awareness for DC/OS Kafka, DC/OS Cassandra, DC/OS Elastic and DC/OS HDFS. Use fault domain awareness to make your services highly available and to allow for increased capacity when needed. [enterprise type="inline" size="small" /]
- New API endpoint to pause a node for DC/OS Kafka, DC/OS Cassandra, DC/OS Elastic, and DC/OS HDFS. Use this endpoint to relaunch a node in an idle command state for debugging purposes.
- New DC/OS Kafka ZooKeeper service. [View the documentation](/services/kafka-zookeeper).
- You can now select a DC/OS data service version from a dropdown menu in the DC/OS UI.
- Improved scalability for all DC/OS data services.

