'use client';
import { useState } from 'react';
import styles from './AIAutomationTools.module.css';

const AIAutomationTools = () => {
    const [activeTab, setActiveTab] = useState('orchestration');

    const workflowData = [
        {
            platform: 'n8n',
            bestFor: 'Technical teams, self-hosted enterprise',
            keyCapability: 'Open-source, 400+ nodes, built-in AI Agent node with LLM reasoning. Self-hosted for GDPR and HIPAA compliance.',
            useCase: 'Complex multi-branch workflows, data pipeline automation, on-premise deployments, agentic task automation'
        },
        {
            platform: 'Make (Integromat)',
            bestFor: 'Mid-market ops teams, branching logic',
            keyCapability: 'Visual scenario builder, powerful data transforms, MCP server support, cost-efficient at high volume.',
            useCase: 'Approval workflows, data enrichment pipelines, CRM sync automation, cross-department orchestration'
        },
        {
            platform: 'Zapier',
            bestFor: 'Non-technical teams, rapid no-code builds',
            keyCapability: '8,000+ app integrations, AI Orchestration and Agents add-on, MCP support, fastest time-to-automation.',
            useCase: 'Marketing automation, sales triggers, CRM and email connections, quick-win process automation'
        },
        {
            platform: 'Power Automate',
            bestFor: 'Microsoft 365 enterprise shops',
            keyCapability: 'Deep MS ecosystem: SharePoint, Teams, Dynamics. Desktop RPA flows for legacy software.',
            useCase: 'Legacy system automation, SharePoint document workflows, Teams approval chains, Dynamics CRM flows'
        },
        {
            platform: 'Pipedream',
            bestFor: 'Developer-first serverless automation',
            keyCapability: 'Code-first with Node.js, Python, Go. Low-latency serverless runtime, pre-built API triggers.',
            useCase: 'Webhook-triggered automation, API event processing, CI/CD trigger pipelines'
        },
        {
            platform: 'Pabbly Connect',
            bestFor: 'SMB and budget-conscious teams',
            keyCapability: 'Flat-rate pricing, 1,000+ connectors, no per-task charges.',
            useCase: 'Budget automation for SMBs, Shopify and eCommerce workflows, email marketing automation'
        },
        {
            platform: 'Activepieces',
            bestFor: 'Privacy-first, self-hosted alternative',
            keyCapability: 'Open-source, air-gapped deployment, growing integration library.',
            useCase: 'Regulated sector automation, on-premise integrations, organisations with strict data residency'
        }
    ];

    const frameworksData = [
        {
            platform: 'Claude Code (Anthropic)',
            bestFor: 'Agentic coding and automation',
            keyCapability: 'Reads entire codebases, multi-file editing, CLI and IDE, multi-agent spawning, MCP-connected, CI/CD integration. Stripe deployed across 1,370 engineers.',
            useCase: 'Developer workflow automation, automated code review, CI/CD pipeline agents, documentation automation'
        },
        {
            platform: 'LangChain / LangGraph',
            bestFor: 'Open-source orchestration',
            keyCapability: 'LLM chains, tool use, stateful multi-agent graphs, RAG pipelines. 70 AI-specific nodes in n8n integration.',
            useCase: 'Complex reasoning agents, stateful multi-step workflows, RAG system builds, agent memory management'
        },
        {
            platform: 'CrewAI',
            bestFor: 'Multi-agent collaboration',
            keyCapability: 'Role-based agent crews with defined tasks, sequential and parallel execution, built-in observability.',
            useCase: 'Research and analysis crews, content production agents, multi-role business process automation'
        },
        {
            platform: 'AutoGen (Microsoft)',
            bestFor: 'Conversation-driven multi-agent',
            keyCapability: 'Agents communicate to solve tasks, code execution, human-in-loop integration.',
            useCase: 'Research automation, software engineering agents, complex problem-solving workflows'
        },
        {
            platform: 'Relevance AI',
            bestFor: 'No-code agent builder for ops',
            keyCapability: 'AI teammates without code, Salesforce, HubSpot, Airtable, Slack connectors. LLM-agnostic.',
            useCase: 'Operations automation for non-technical teams, sales and support agent builds'
        },
        {
            platform: 'Vellum AI',
            bestFor: 'AI-native agent and LLM ops',
            keyCapability: 'Natural language agent building, evals, versioning, tracing. Cloud, VPC, or on-prem deployment.',
            useCase: 'Production LLM app management, agent performance evaluation, enterprise AI ops'
        }
    ];

    const currentData = activeTab === 'orchestration' ? workflowData : frameworksData;
    const tableHeaders = activeTab === 'orchestration' 
        ? ['Platform', 'Best For', 'Key Capability', 'Computyne Use Cases']
        : ['Framework', 'Type', 'Key Capability', 'Computyne Application'];

    return (
        <section className={styles.automationStackSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionBadge}>AUTOMATION STACK</div>
                    <h2 className={styles.sectionTitle}>
                        The Tools Stack Computyne Builds On
                    </h2>
                    <p className={styles.sectionDescription}>
                        We build, connect, test, and deploy production automation systems using the best platforms, frameworks, and integration layers available. Our expertise spans across the entire automation ecosystem.
                    </p>
                </div>

                <div className={styles.tabContainer}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'orchestration' ? styles.active : ''}`}
                        onClick={() => setActiveTab('orchestration')}
                    >
                        Orchestration Platforms
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'frameworks' ? styles.active : ''}`}
                        onClick={() => setActiveTab('frameworks')}
                    >
                        Agentic Frameworks
                    </button>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.tabContent}>
                        <div className={styles.tableWrapper}>
                            <table className={styles.automationTable}>
                                <thead>
                                    <tr>
                                        {tableHeaders.map((header, index) => (
                                            <th key={index}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentData.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <span className={styles.platformName}>{item.platform}</span>
                                            </td>
                                            <td>
                                                <span className={styles.bestFor}>{item.bestFor}</span>
                                            </td>
                                            <td>
                                                <span className={styles.keyCapability}>{item.keyCapability}</span>
                                            </td>
                                            <td>
                                                <span className={styles.useCase}>{item.useCase}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAutomationTools;
