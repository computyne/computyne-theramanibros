const toolGroups = [
    {
        title: "LLM Providers",
        items: [
            { label: "Claude (Anthropic)", initials: "A", color: "#d97757" },
            { label: "GPT-4o (OpenAI)", initials: "O", color: "#2fb28f" },
            { label: "Gemini 2.5", initials: "G", color: "#4c82f1" },
            { label: "Llama 4 (Meta)", initials: "f", color: "#3478ef" },
            { label: "Mistral AI", initials: "M", color: "#ff663d" },
            { label: "DeepSeek", initials: "D", color: "#11162f" },
            { label: "Cohere", initials: "C", color: "#d92f38" },
        ],
    },
    {
        title: "Workflow Orchestration",
        items: [
            { label: "n8n", initials: "n8", color: "#e84678" },
            { label: "Make", initials: "M", color: "#8f14db" },
            { label: "Zapier", initials: "Z", color: "#ff4f1f" },
            { label: "Power Automate", initials: "PA", color: "#2f73d9" },
            { label: "Pipedream", initials: "P", color: "#2ebf70" },
            { label: "Pabbly Connect", initials: "P", color: "#ee3f88" },
            { label: "Activepieces", initials: "AP", color: "#35bea9" },
        ],
    },
    {
        title: "Agentic AI Frameworks",
        items: [
            { label: "Claude Code", initials: "CC", color: "#d97757" },
            { label: "LangChain", initials: "LC", color: "#0d594f" },
            { label: "LangGraph", initials: "LG", color: "#0d594f" },
            { label: "CrewAI", initials: "CR", color: "#ed4c3e" },
            { label: "AutoGen", initials: "AG", color: "#2f73d9" },
            { label: "Vellum AI", initials: "V", color: "#6646a5" },
            { label: "Relevance AI", initials: "R", color: "#2f73d9" },
        ],
    },
    {
        title: "MCP & Integrations",
        items: [
            { label: "MCP Servers", initials: "MCP", color: "#d97757" },
            { label: "Salesforce", initials: "SF", color: "#36aee2" },
            { label: "HubSpot", initials: "HS", color: "#ff7551" },
            { label: "Slack", initials: "S", color: "#61135f" },
            { label: "GitHub", initials: "GH", color: "#2d2a25" },
            { label: "Jira", initials: "J", color: "#2f65d9" },
            { label: "Notion", initials: "N", color: "#050505" },
            { label: "PostgreSQL", initials: "PG", color: "#336791" },
            { label: "Shopify", initials: "SH", color: "#ff9718" },
        ],
    },
];

const AutomationToolsModels = () => {
    return (
        <section className="automation-tools-section section-gap-x">
            <div className="container-fluid automation-tools-container">
                <div className="automation-tools-heading text-center">
                    <h2 className="automation-tools-title">
                        The Automation Stack Computyne Builds On
                    </h2>
                    <p>
                        AI agents and automated workflows are built on top of a rapidly maturing ecosystem of orchestration platforms, model interfaces, protocol standards, and integration layers. Computyne engineers are active practitioners across all of the major tools in this stack. We are platform-agnostic and model-agnostic: we select the right tool for each use case rather than defaulting to one provider.
                    </p>
                </div>

                <div className="automation-tools-groups">
                    {toolGroups.map((group) => (
                        <div className="automation-tools-group" key={group.title}>
                            <h3>{group.title}</h3>
                            <div className="automation-tools-list" role="list">
                                {group.items.map((item) => (
                                    <div className="automation-tool-chip" role="listitem" key={item.label}>
                                        <span
                                            className="automation-tool-icon"
                                            style={{ backgroundColor: item.color }}
                                            aria-hidden="true"
                                        >
                                            {item.initials}
                                        </span>
                                        <span className="automation-tool-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AutomationToolsModels;
