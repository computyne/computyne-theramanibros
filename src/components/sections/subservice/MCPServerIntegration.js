'use client';
import { useState } from 'react';
import styles from './MCPServerIntegration.module.css';

const MCPServerIntegration = () => {
    const [activeTab, setActiveTab] = useState('connections');

    const mcpConnectionsData = [
        {
            category: 'CRM and Sales',
            tools: 'Salesforce, HubSpot, Pipedrive, Apollo',
            actions: 'Read and update contacts, log activities, qualify and route leads, create opportunities automatically'
        },
        {
            category: 'Communication',
            tools: 'Slack, Microsoft Teams, Gmail, Outlook, Discord',
            actions: 'Send notifications, draft emails, read messages, create channels, trigger comms from workflow events'
        },
        {
            category: 'Project Management',
            tools: 'Jira, Linear, Asana, Notion, ClickUp, Trello',
            actions: 'Create tickets, update statuses, assign tasks, generate sprint summaries, track blockers'
        },
        {
            category: 'Documents and Files',
            tools: 'Google Drive, SharePoint, Confluence, Dropbox, OneDrive',
            actions: 'Read documents, generate files, search knowledge bases, maintain and update documentation'
        },
        {
            category: 'Developer Tools',
            tools: 'GitHub, GitLab, Sentry, Sourcegraph, Replit, Cursor',
            actions: 'Review PRs, triage issues, analyse CI failures, generate code, monitor deployment pipelines'
        },
        {
            category: 'Databases',
            tools: 'PostgreSQL, MySQL, MongoDB, Redis, BigQuery, Snowflake',
            actions: 'Query in natural language, update records, generate reports from live data'
        },
        {
            category: 'eCommerce',
            tools: 'Shopify, WooCommerce, Magento, custom catalogue APIs',
            actions: 'Update listings, monitor competitor pricing, process orders, handle inventory alerts'
        },
        {
            category: 'Finance and Accounting',
            tools: 'QuickBooks, Xero, Stripe, NetSuite, Sage',
            actions: 'Process invoices, reconcile accounts, flag anomalies, generate financial summaries'
        },
        {
            category: 'HR and People Ops',
            tools: 'BambooHR, Workday, Greenhouse, Lever, Rippling',
            actions: 'Screen CVs, schedule interviews, manage onboarding tasks, update employee records'
        },
        {
            category: 'Marketing and Analytics',
            tools: 'HubSpot Marketing, Mailchimp, Google Analytics, Semrush',
            actions: 'Pull campaign data, draft content briefs, update lead scores, generate performance reports'
        },
        {
            category: 'Custom Internal Systems',
            tools: 'Proprietary databases, legacy APIs, internal tools',
            actions: 'Computyne builds bespoke MCP servers for any client-specific data source or internal system'
        }
    ];

    const enterpriseBenefitsData = [
        {
            benefit: 'Write the server once',
            description: 'every MCP-compatible AI model (Claude, GPT-4o, Gemini, any future model) can use it'
        },
        {
            benefit: 'No vendor lock-in',
            description: 'switching or adding AI models does not require rebuilding integrations'
        },
        {
            benefit: 'Standardised security',
            description: 'consistent authentication, access controls, and audit logging across all systems'
        },
        {
            benefit: 'Neutral governance',
            description: 'Linux Foundation controls the protocol, independent of any single AI vendor'
        },
        {
            benefit: 'Custom server builds',
            description: 'Computyne builds MCP servers for proprietary internal systems as a standard service'
        }
    ];

    return (
        <section className={styles.mcpSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionBadge}>MCP SERVER INTEGRATIONS</div>
                    <h2 className={styles.sectionTitle}>
                        MCP Server Integration: Connecting AI Agents to Any Tool or Data Source
                    </h2>
                </div>

                <div className={styles.contentDescription}>
                    <p>
                        The Model Context Protocol (MCP) is the open standard that changed how AI agents connect to external systems. Released by Anthropic in November 2024 and now governed by the Linux Foundation's Agentic AI Foundation, MCP has been adopted by OpenAI, Google DeepMind, Microsoft, and every major AI tool in the ecosystem.
                    </p>
                    <p>
                        Think of it as USB-C for AI: one standardised connection that lets any AI agent plug into any data source, API, or tool. Before MCP, connecting an agent to multiple systems required a custom integration for every model-tool combination. MCP eliminates that entirely. Computyne builds, configures, and deploys MCP servers for both off-the-shelf business tools and client-specific internal systems as part of every agentic AI engagement.
                    </p>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.horizontalLayout}>
                        <div className={styles.tabSidebar}>
                            <button
                                className={`${styles.sidebarTab} ${activeTab === 'connections' ? styles.active : ''}`}
                                onClick={() => setActiveTab('connections')}
                            >
                                What Computyne Connects via MCP
                            </button>
                            <button
                                className={`${styles.sidebarTab} ${activeTab === 'benefits' ? styles.active : ''}`}
                                onClick={() => setActiveTab('benefits')}
                            >
                                Why MCP Matters for Enterprise Clients
                            </button>
                        </div>

                        <div className={styles.tabContent}>
                            {activeTab === 'connections' && (
                                <div className={styles.contentGrid}>
                                    <div className={styles.contentHeader}>
                                        <h3>What Computyne Connects via MCP</h3>
                                    </div>
                                    <div className={styles.gridContainer}>
                                        {mcpConnectionsData.map((item, index) => (
                                            <div key={index} className={styles.categoryCard}>
                                                <div className={styles.cardHeader}>
                                                    <h4 className={styles.categoryName}>{item.category}</h4>
                                                </div>
                                                <div className={styles.cardContent}>
                                                    <div className={styles.toolsSection}>
                                                        <span className={styles.toolsLabel}>Tools and Platforms:</span>
                                                        <p className={styles.toolsList}>{item.tools}</p>
                                                    </div>
                                                    <div className={styles.actionsSection}>
                                                        <span className={styles.actionsLabel}>What Agents Do:</span>
                                                        <p className={styles.actionsList}>{item.actions}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'benefits' && (
                                <div className={styles.contentGrid}>
                                    <div className={styles.contentHeader}>
                                        <h3>Why MCP Matters for Enterprise Clients</h3>
                                    </div>
                                    <div className={styles.benefitsList}>
                                        {enterpriseBenefitsData.map((item, index) => (
                                            <div key={index} className={styles.benefitItem}>
                                                <div className={styles.benefitHeader}>
                                                    <h4 className={styles.benefitTitle}>{item.benefit}</h4>
                                                </div>
                                                <p className={styles.benefitDescription}>{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MCPServerIntegration;
