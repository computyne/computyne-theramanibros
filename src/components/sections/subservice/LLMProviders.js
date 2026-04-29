'use client';
import { useState } from 'react';
import styles from './LLMProviders.module.css';

const LLMProviders = () => {
    const [activeTab, setActiveTab] = useState('providers');

    const providersData = [
        {
            provider: 'Anthropic Claude',
            models: 'Claude Opus 4.6, Sonnet 4.6, Haiku 4.5',
            bestFor: 'Complex reasoning, long-context document agents, code automation, agentic loops. Stripe deployed Claude Code across 1,370 engineers.',
            deployment: 'Anthropic API, AWS Bedrock, Google Vertex AI, on-premise via Bedrock'
        },
        {
            provider: 'OpenAI',
            models: 'GPT-4o, o3, o4-mini, GPT-4o-mini',
            bestFor: 'General-purpose agents, function calling, multi-modal tasks. Cost-route volume tasks to mini models.',
            deployment: 'OpenAI API, Azure OpenAI, AWS Bedrock'
        },
        {
            provider: 'Google Gemini',
            models: 'Gemini 2.5 Pro, Gemini 2.0 Flash',
            bestFor: 'Multi-modal workflows, Google Workspace native, 1M token window for massive document context.',
            deployment: 'Google AI Studio, Vertex AI, Google Cloud'
        },
        {
            provider: 'Meta Llama (open source)',
            models: 'Llama 4 Scout, Llama 4 Maverick, Llama 3.3',
            bestFor: 'On-premise and air-gapped deployments. Zero data leaves your environment. No usage fees.',
            deployment: 'Self-hosted, AWS Bedrock, Groq, Together AI'
        },
        {
            provider: 'Mistral AI',
            models: 'Mistral Large, Mistral Small, Codestral',
            bestFor: 'European data residency, GDPR-native. Strong coding performance. Azure AI Foundry available.',
            deployment: 'Mistral API, Azure AI Foundry, self-hosted'
        },
        {
            provider: 'DeepSeek',
            models: 'DeepSeek V3, DeepSeek R1',
            bestFor: 'Cost-efficient reasoning at scale. Strong coding and analysis at a fraction of proprietary model costs.',
            deployment: 'DeepSeek API, self-hosted, various cloud providers'
        },
        {
            provider: 'Cohere',
            models: 'Command R+, Command A',
            bestFor: 'Enterprise RAG pipelines, grounded retrieval, reranking, multi-lingual support.',
            deployment: 'Cohere API, Azure AI Foundry, AWS Bedrock'
        }
    ];

    return (
        <section className={styles.llmSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionBadge}>LLM PROVIDERS WE BUILD WITH</div>
                    <h2 className={styles.sectionTitle}>
                        LLM-Agnostic Development: The Right Model for Every Task
                    </h2>
                    <p className={styles.sectionDescription}>
                        Every Computyne engagement begins with model selection. The right large language model depends on the task type, latency requirements, data sensitivity, cost targets, and deployment environment. We are model-agnostic: we select the best model for each use case rather than defaulting to one provider.
                    </p>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.horizontalLayout}>
                        <div className={styles.tabSidebar}>
                            <button
                                className={`${styles.sidebarTab} ${activeTab === 'providers' ? styles.active : ''}`}
                                onClick={() => setActiveTab('providers')}
                            >
                                LLM Providers
                            </button>
                            <button
                                className={`${styles.sidebarTab} ${activeTab === 'strategy' ? styles.active : ''}`}
                                onClick={() => setActiveTab('strategy')}
                            >
                                Model-Mixing Cost Strategy
                            </button>
                        </div>

                        <div className={styles.tabContent}>
                            {activeTab === 'providers' && (
                                <div className={styles.contentGrid}>
                                    <div className={styles.contentHeader}>
                                        <h3>LLM Providers and Models</h3>
                                    </div>
                                    <div className={styles.providersTable}>
                                        <table className={styles.llmTable}>
                                            <thead>
                                                <tr>
                                                    <th>Provider</th>
                                                    <th>Models</th>
                                                    <th>Best For</th>
                                                    <th>Deployment Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {providersData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <span className={styles.providerName}>{item.provider}</span>
                                                        </td>
                                                        <td>
                                                            <span className={styles.modelsList}>{item.models}</span>
                                                        </td>
                                                        <td>
                                                            <span className={styles.bestFor}>{item.bestFor}</span>
                                                        </td>
                                                        <td>
                                                            <span className={styles.deploymentOptions}>{item.deployment}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'strategy' && (
                                <div className={styles.contentGrid}>
                                    <div className={styles.contentHeader}>
                                        <h3>Model-Mixing Cost Strategy</h3>
                                    </div>
                                    <div className={styles.strategyContent}>
                                        <p className={styles.strategyDescription}>
                                            Enterprise deployments use model mixing to optimise cost without sacrificing quality. High-volume classification, summarisation, and simple routing tasks are handled by faster, cheaper models such as Claude Haiku or GPT-4o-mini. Complex reasoning, multi-step agent loops, and high-accuracy tasks are routed to Opus 4.6 or GPT-4o.
                                        </p>
                                        <div className={styles.costBenefit}>
                                            <div className={styles.benefitCard}>
                                                <h4>Cost Reduction</h4>
                                                <p>Computyne configures this routing layer as standard on enterprise engagements, typically reducing LLM operating costs by 40 to 60%.</p>
                                            </div>
                                            <div className={styles.benefitCard}>
                                                <h4>Quality Optimization</h4>
                                                <p>Smart routing ensures each task uses the most appropriate model, maintaining high accuracy while optimizing costs.</p>
                                            </div>
                                        </div>
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

export default LLMProviders;
