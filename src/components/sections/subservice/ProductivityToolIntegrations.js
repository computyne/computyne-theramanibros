'use client';
import { useState } from 'react';
import styles from './ProductivityToolIntegrations.module.css';

const ProductivityToolIntegrations = () => {
    const [activeTab, setActiveTab] = useState('communication');

    const communicationData = [
        {
            tool: 'Slack',
            capabilities: 'Post notifications, read messages, create channels, respond to commands, route tickets, send summaries'
        },
        {
            tool: 'Microsoft Teams',
            capabilities: 'Send automated updates, create meeting summaries, trigger workflows from messages, post agent results'
        },
        {
            tool: 'Gmail / Google Workspace',
            capabilities: 'Draft and send emails, read and categorise inbox, trigger workflows, update Sheets and Docs'
        },
        {
            tool: 'Outlook / Microsoft 365',
            capabilities: 'Draft and send emails, calendar scheduling, update SharePoint, Power Automate integration'
        },
        {
            tool: 'Zoom / Google Meet',
            capabilities: 'Transcribe and summarise meetings, extract action items, auto-update project management tools'
        }
    ];

    const crmData = [
        {
            tool: 'Salesforce',
            capabilities: 'Read and update contacts, log call notes, create opportunities, qualify leads, generate pipeline reports'
        },
        {
            tool: 'HubSpot',
            capabilities: 'Enrich contacts, automate email sequences, update deal stages, generate content drafts, pull analytics'
        },
        {
            tool: 'Pipedrive',
            capabilities: 'Update deal records, trigger follow-up tasks, generate activity reports, enrich prospects'
        },
        {
            tool: 'Apollo / Clay',
            capabilities: 'Automated lead research, email personalisation at scale, CRM enrichment, outbound sequence triggering'
        },
        {
            tool: 'Mailchimp / ActiveCampaign',
            capabilities: 'Trigger campaigns from agent actions, update audience segments, generate email drafts'
        }
    ];

    const projectManagementData = [
        {
            tool: 'Jira',
            capabilities: 'Create and update issues, generate sprint summaries, triage bug reports, post code review results'
        },
        {
            tool: 'Linear',
            capabilities: 'Create issues from Slack/email, update statuses, generate sprint reports, auto-label and prioritise'
        },
        {
            tool: 'Notion',
            capabilities: 'Update databases, generate documentation, create project briefs, maintain knowledge bases'
        },
        {
            tool: 'Asana / ClickUp',
            capabilities: 'Create tasks from triggers, update statuses, generate progress reports, automate recurring tasks'
        },
        {
            tool: 'GitHub / GitLab',
            capabilities: 'Review PRs, triage issues, analyse CI failures, generate changelogs, run code quality checks'
        }
    ];

    const financeData = [
        {
            tool: 'QuickBooks / Xero',
            capabilities: 'Process invoices, reconcile transactions, flag anomalies, generate expense summaries'
        },
        {
            tool: 'Stripe',
            capabilities: 'Monitor payment events, trigger alerts on failures, generate revenue reports, automate dunning'
        },
        {
            tool: 'BambooHR / Workday',
            capabilities: 'Automate onboarding task creation, update employee records, generate HR reports'
        },
        {
            tool: 'Greenhouse / Lever',
            capabilities: 'Screen CVs against job criteria, schedule interviews, update candidate statuses'
        },
        {
            tool: 'Zendesk / Freshdesk / ServiceNow',
            capabilities: 'Triage tickets, draft first responses, escalate by priority, generate support performance reports'
        }
    ];

    const categories = [
        { id: 'communication', name: 'Communication and Collaboration', data: communicationData },
        { id: 'crm', name: 'CRM, Sales and Marketing', data: crmData },
        { id: 'project', name: 'Project Management and Developer Tools', data: projectManagementData },
        { id: 'finance', name: 'Finance, HR and Operations', data: financeData }
    ];

    const currentData = categories.find(cat => cat.id === activeTab)?.data || [];

    return (
        <section className={styles.productivitySection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionBadge}>PRODUCTIVITY TOOL INTEGRATIONS</div>
                    <h2 className={styles.sectionTitle}>
                        AI Agents That Connect to Your Entire Tool Stack
                    </h2>
                    <p className={styles.sectionDescription}>
                        Agents built by Computyne integrate directly with the tools your teams use every day. Below is the full integration map across the most common enterprise productivity categories.
                    </p>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.horizontalLayout}>
                        <div className={styles.tabSidebar}>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`${styles.sidebarTab} ${activeTab === category.id ? styles.active : ''}`}
                                    onClick={() => setActiveTab(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div className={styles.tabContent}>
                            <div className={styles.contentGrid}>
                                <div className={styles.contentHeader}>
                                    <h3>{categories.find(cat => cat.id === activeTab)?.name}</h3>
                                </div>
                                <div className={styles.toolsTable}>
                                    <table className={styles.productivityTable}>
                                        <thead>
                                            <tr>
                                                <th>Tool</th>
                                                <th>What AI Agents Can Do</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <span className={styles.toolName}>{item.tool}</span>
                                                    </td>
                                                    <td>
                                                        <span className={styles.capabilities}>{item.capabilities}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductivityToolIntegrations;
