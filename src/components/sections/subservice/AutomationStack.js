import React from 'react';

const AutomationStack = () => {
    return (
        <section className="automation-stack-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">
                        The Automation Stack Computyne Builds On
                    </h2>
                    <p className="section-subtitle">
                        AI agents and automated workflows are built on top of a rapidly maturing ecosystem of orchestration platforms, model interfaces, protocol standards, and integration layers. Computyne engineers are active practitioners across all of the major tools in this stack. We are platform-agnostic and model-agnostic: we select the right tool for each use case rather than defaulting to one provider.
                    </p>
                </div>

                <div className="automation-stack-content">
                    {/* Workflow Orchestration Platforms */}
                    <div className="stack-section">
                        <h3 className="stack-section-title">Workflow Orchestration Platforms</h3>
                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Platform</th>
                                        <th>Best For</th>
                                        <th>Key Capability</th>
                                        <th>Computyne Use Cases</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>n8n</strong></td>
                                        <td>Technical teams, self-hosted enterprise</td>
                                        <td>Open-source, 400+ nodes, built-in AI Agent node with LLM reasoning. Self-hosted for GDPR and HIPAA compliance.</td>
                                        <td>Complex multi-branch workflows, data pipeline automation, on-premise deployments, agentic task automation</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Make (Integromat)</strong></td>
                                        <td>Mid-market ops teams, branching logic</td>
                                        <td>Visual scenario builder, powerful data transforms, MCP server support, cost-efficient at high volume.</td>
                                        <td>Approval workflows, data enrichment pipelines, CRM sync automation, cross-department orchestration</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Zapier</strong></td>
                                        <td>Non-technical teams, rapid no-code builds</td>
                                        <td>8,000+ app integrations, AI Orchestration and Agents add-on, MCP support, fastest time-to-automation.</td>
                                        <td>Marketing automation, sales triggers, CRM and email connections, quick-win process automation</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Power Automate</strong></td>
                                        <td>Microsoft 365 enterprise shops</td>
                                        <td>Deep MS ecosystem: SharePoint, Teams, Dynamics. Desktop RPA flows for legacy software.</td>
                                        <td>Legacy system automation, SharePoint document workflows, Teams approval chains, Dynamics CRM flows</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Pipedream</strong></td>
                                        <td>Developer-first serverless automation</td>
                                        <td>Code-first with Node.js, Python, Go. Low-latency serverless runtime, pre-built API triggers.</td>
                                        <td>Webhook-triggered automation, API event processing, CI/CD trigger pipelines</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Pabbly Connect</strong></td>
                                        <td>SMB and budget-conscious teams</td>
                                        <td>Flat-rate pricing, 1,000+ connectors, no per-task charges.</td>
                                        <td>Budget automation for SMBs, Shopify and eCommerce workflows, email marketing automation</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Activepieces</strong></td>
                                        <td>Privacy-first, self-hosted alternative</td>
                                        <td>Open-source, air-gapped deployment, growing integration library.</td>
                                        <td>Regulated sector automation, on-premise integrations, organisations with strict data residency</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Agentic AI Frameworks */}
                    <div className="stack-section">
                        <h3 className="stack-section-title">Agentic AI Frameworks</h3>
                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Framework</th>
                                        <th>Type</th>
                                        <th>Key Capability</th>
                                        <th>Computyne Application</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Claude Code (Anthropic)</strong></td>
                                        <td>Agentic coding and automation</td>
                                        <td>Reads entire codebases, multi-file editing, CLI and IDE, multi-agent spawning, MCP-connected, CI/CD integration. Stripe deployed across 1,370 engineers.</td>
                                        <td>Developer workflow automation, automated code review, CI/CD pipeline agents, documentation automation</td>
                                    </tr>
                                    <tr>
                                        <td><strong>LangChain / LangGraph</strong></td>
                                        <td>Open-source orchestration</td>
                                        <td>LLM chains, tool use, stateful multi-agent graphs, RAG pipelines. 70 AI-specific nodes in n8n integration.</td>
                                        <td>Complex reasoning agents, stateful multi-step workflows, RAG system builds, agent memory management</td>
                                    </tr>
                                    <tr>
                                        <td><strong>CrewAI</strong></td>
                                        <td>Multi-agent collaboration</td>
                                        <td>Role-based agent crews with defined tasks, sequential and parallel execution, built-in observability.</td>
                                        <td>Research and analysis crews, content production agents, multi-role business process automation</td>
                                    </tr>
                                    <tr>
                                        <td><strong>AutoGen (Microsoft)</strong></td>
                                        <td>Conversation-driven multi-agent</td>
                                        <td>Agents communicate to solve tasks, code execution, human-in-loop integration.</td>
                                        <td>Research automation, software engineering agents, complex problem-solving workflows</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Relevance AI</strong></td>
                                        <td>No-code agent builder for ops</td>
                                        <td>AI teammates without code, Salesforce, HubSpot, Airtable, Slack connectors. LLM-agnostic.</td>
                                        <td>Operations automation for non-technical teams, sales and support agent builds</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Vellum AI</strong></td>
                                        <td>AI-native agent and LLM ops</td>
                                        <td>Natural language agent building, evals, versioning, tracing. Cloud, VPC, or on-prem deployment.</td>
                                        <td>Production LLM app management, agent performance evaluation, enterprise AI ops</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* MCP Server Integration */}
                    <div className="stack-section">
                        <h3 className="stack-section-title">MCP Server Integration: Connecting AI Agents to Any Tool or Data Source</h3>
                        <p className="stack-description">
                            The Model Context Protocol (MCP) is the open standard that changed how AI agents connect to external systems. Released by Anthropic in November 2024 and now governed by the Linux Foundation's Agentic AI Foundation, MCP has been adopted by OpenAI, Google DeepMind, Microsoft, and every major AI tool in the ecosystem.
                        </p>
                        <p className="stack-description">
                            Think of it as USB-C for AI: one standardised connection that lets any AI agent plug into any data source, API, or tool. Before MCP, connecting an agent to multiple systems required a custom integration for every model-tool combination. MCP eliminates that entirely. Computyne builds, configures, and deploys MCP servers for both off-the-shelf business tools and client-specific internal systems as part of every agentic AI engagement.
                        </p>

                        <h4 className="subsection-title">What Computyne Connects via MCP</h4>
                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Tools and Platforms</th>
                                        <th>What Agents Do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>CRM and Sales</strong></td>
                                        <td>Salesforce, HubSpot, Pipedrive, Apollo</td>
                                        <td>Read and update contacts, log activities, qualify and route leads, create opportunities automatically</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Communication</strong></td>
                                        <td>Slack, Microsoft Teams, Gmail, Outlook, Discord</td>
                                        <td>Send notifications, draft emails, read messages, create channels, trigger comms from workflow events</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Project Management</strong></td>
                                        <td>Jira, Linear, Asana, Notion, ClickUp, Trello</td>
                                        <td>Create tickets, update statuses, assign tasks, generate sprint summaries, track blockers</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Documents and Files</strong></td>
                                        <td>Google Drive, SharePoint, Confluence, Dropbox, OneDrive</td>
                                        <td>Read documents, generate files, search knowledge bases, maintain and update documentation</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Developer Tools</strong></td>
                                        <td>GitHub, GitLab, Sentry, Sourcegraph, Replit, Cursor</td>
                                        <td>Review PRs, triage issues, analyse CI failures, generate code, monitor deployment pipelines</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Databases</strong></td>
                                        <td>PostgreSQL, MySQL, MongoDB, Redis, BigQuery, Snowflake</td>
                                        <td>Query in natural language, update records, generate reports from live data</td>
                                    </tr>
                                    <tr>
                                        <td><strong>eCommerce</strong></td>
                                        <td>Shopify, WooCommerce, Magento, custom catalogue APIs</td>
                                        <td>Update listings, monitor competitor pricing, process orders, handle inventory alerts</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Finance and Accounting</strong></td>
                                        <td>QuickBooks, Xero, Stripe, NetSuite, Sage</td>
                                        <td>Process invoices, reconcile accounts, flag anomalies, generate financial summaries</td>
                                    </tr>
                                    <tr>
                                        <td><strong>HR and People Ops</strong></td>
                                        <td>BambooHR, Workday, Greenhouse, Lever, Rippling</td>
                                        <td>Screen CVs, schedule interviews, manage onboarding tasks, update employee records</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Marketing and Analytics</strong></td>
                                        <td>HubSpot Marketing, Mailchimp, Google Analytics, Semrush</td>
                                        <td>Pull campaign data, draft content briefs, update lead scores, generate performance reports</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Custom Internal Systems</strong></td>
                                        <td>Proprietary databases, legacy APIs, internal tools</td>
                                        <td>Computyne builds bespoke MCP servers for any client-specific data source or internal system</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="subsection-title">Why MCP Matters for Enterprise Clients</h4>
                        <ul className="feature-list">
                            <li><strong>Write the server once:</strong> every MCP-compatible AI model (Claude, GPT-4o, Gemini, any future model) can use it</li>
                            <li><strong>No vendor lock-in:</strong> switching or adding AI models does not require rebuilding integrations</li>
                            <li><strong>Standardised security:</strong> consistent authentication, access controls, and audit logging across all systems</li>
                            <li><strong>Neutral governance:</strong> Linux Foundation controls the protocol, independent of any single AI vendor</li>
                            <li><strong>Custom server builds:</strong> Computyne builds MCP servers for proprietary internal systems as a standard service</li>
                        </ul>
                    </div>

                    {/* LLM-Agnostic Development */}
                    <div className="stack-section">
                        <h3 className="stack-section-title">LLM-Agnostic Development: The Right Model for Every Task</h3>
                        <p className="stack-description">
                            Every Computyne engagement begins with model selection. The right large language model depends on the task type, latency requirements, data sensitivity, cost targets, and deployment environment. We are model-agnostic: we select the best model for each use case rather than defaulting to one provider.
                        </p>

                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Provider</th>
                                        <th>Models</th>
                                        <th>Best For</th>
                                        <th>Deployment Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Anthropic Claude</strong></td>
                                        <td>Claude Opus 4.6, Sonnet 4.6, Haiku 4.5</td>
                                        <td>Complex reasoning, long-context document agents, code automation, agentic loops. Stripe deployed Claude Code across 1,370 engineers.</td>
                                        <td>Anthropic API, AWS Bedrock, Google Vertex AI, on-premise via Bedrock</td>
                                    </tr>
                                    <tr>
                                        <td><strong>OpenAI</strong></td>
                                        <td>GPT-4o, o3, o4-mini, GPT-4o-mini</td>
                                        <td>General-purpose agents, function calling, multi-modal tasks. Cost-route volume tasks to mini models.</td>
                                        <td>OpenAI API, Azure OpenAI, AWS Bedrock</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Google Gemini</strong></td>
                                        <td>Gemini 2.5 Pro, Gemini 2.0 Flash</td>
                                        <td>Multi-modal workflows, Google Workspace native, 1M token window for massive document context.</td>
                                        <td>Google AI Studio, Vertex AI, Google Cloud</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Meta Llama (open source)</strong></td>
                                        <td>Llama 4 Scout, Llama 4 Maverick, Llama 3.3</td>
                                        <td>On-premise and air-gapped deployments. Zero data leaves your environment. No usage fees.</td>
                                        <td>Self-hosted, AWS Bedrock, Groq, Together AI</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Mistral AI</strong></td>
                                        <td>Mistral Large, Mistral Small, Codestral</td>
                                        <td>European data residency, GDPR-native. Strong coding performance. Azure AI Foundry available.</td>
                                        <td>Mistral API, Azure AI Foundry, self-hosted</td>
                                    </tr>
                                    <tr>
                                        <td><strong>DeepSeek</strong></td>
                                        <td>DeepSeek V3, DeepSeek R1</td>
                                        <td>Cost-efficient reasoning at scale. Strong coding and analysis at a fraction of proprietary model costs.</td>
                                        <td>DeepSeek API, self-hosted, various cloud providers</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cohere</strong></td>
                                        <td>Command R+, Command A</td>
                                        <td>Enterprise RAG pipelines, grounded retrieval, reranking, multi-lingual support.</td>
                                        <td>Cohere API, Azure AI Foundry, AWS Bedrock</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="subsection-title">Model-Mixing Cost Strategy</h4>
                        <p className="stack-description">
                            Enterprise deployments use model mixing to optimise cost without sacrificing quality. High-volume classification, summarisation, and simple routing tasks are handled by faster, cheaper models such as Claude Haiku or GPT-4o-mini. Complex reasoning, multi-step agent loops, and high-accuracy tasks are routed to Opus 4.6 or GPT-4o. Computyne configures this routing layer as standard on enterprise engagements, typically reducing LLM operating costs by 40 to 60%.
                        </p>
                    </div>

                    {/* Productivity Tool Integrations */}
                    <div className="stack-section">
                        <h3 className="stack-section-title">AI Agents That Connect to Your Entire Tool Stack</h3>
                        <p className="stack-description">
                            Agents built by Computyne integrate directly with the tools your teams use every day. Below is the full integration map across the most common enterprise productivity categories.
                        </p>

                        <h4 className="subsection-title">Communication and Collaboration</h4>
                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Tool</th>
                                        <th>What AI Agents Can Do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Slack</strong></td>
                                        <td>Post notifications, read messages, create channels, respond to commands, route tickets, send summaries</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Microsoft Teams</strong></td>
                                        <td>Send automated updates, create meeting summaries, trigger workflows from messages, post agent results</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Gmail / Google Workspace</strong></td>
                                        <td>Draft and send emails, read and categorise inbox, trigger workflows, update Sheets and Docs</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Outlook / Microsoft 365</strong></td>
                                        <td>Draft and send emails, calendar scheduling, update SharePoint, Power Automate integration</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Zoom / Google Meet</strong></td>
                                        <td>Transcribe and summarise meetings, extract action items, auto-update project management tools</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="subsection-title">CRM, Sales and Marketing</h4>
                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Tool</th>
                                        <th>What AI Agents Can Do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Salesforce</strong></td>
                                        <td>Read and update contacts, log call notes, create opportunities, qualify leads, generate pipeline reports</td>
                                    </tr>
                                    <tr>
                                        <td><strong>HubSpot</strong></td>
                                        <td>Enrich contacts, automate email sequences, update deal stages, generate content drafts, pull analytics</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Pipedrive</strong></td>
                                        <td>Update deal records, trigger follow-up tasks, generate activity reports, enrich prospects</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Apollo / Clay</strong></td>
                                        <td>Automated lead research, email personalisation at scale, CRM enrichment, outbound sequence triggering</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Mailchimp / ActiveCampaign</strong></td>
                                        <td>Trigger campaigns from agent actions, update audience segments, generate email drafts</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="subsection-title">Project Management and Developer Tools</h4>
                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Tool</th>
                                        <th>What AI Agents Can Do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Jira</strong></td>
                                        <td>Create and update issues, generate sprint summaries, triage bug reports, post code review results</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Linear</strong></td>
                                        <td>Create issues from Slack/email, update statuses, generate sprint reports, auto-label and prioritise</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Notion</strong></td>
                                        <td>Update databases, generate documentation, create project briefs, maintain knowledge bases</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Asana / ClickUp</strong></td>
                                        <td>Create tasks from triggers, update statuses, generate progress reports, automate recurring tasks</td>
                                    </tr>
                                    <tr>
                                        <td><strong>GitHub / GitLab</strong></td>
                                        <td>Review PRs, triage issues, analyse CI failures, generate changelogs, run code quality checks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="subsection-title">Finance, HR and Operations</h4>
                        <div className="table-responsive">
                            <table className="automation-table">
                                <thead>
                                    <tr>
                                        <th>Tool</th>
                                        <th>What AI Agents Can Do</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>QuickBooks / Xero</strong></td>
                                        <td>Process invoices, reconcile transactions, flag anomalies, generate expense summaries</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Stripe</strong></td>
                                        <td>Monitor payment events, trigger alerts on failures, generate revenue reports, automate dunning</td>
                                    </tr>
                                    <tr>
                                        <td><strong>BambooHR / Workday</strong></td>
                                        <td>Automate onboarding task creation, update employee records, generate HR reports</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Greenhouse / Lever</strong></td>
                                        <td>Screen CVs against job criteria, schedule interviews, update candidate statuses</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Zendesk / Freshdesk / ServiceNow</strong></td>
                                        <td>Triage tickets, draft first responses, escalate by priority, generate support performance reports</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutomationStack;
