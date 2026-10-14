<div class="about-layout">
<div class="about-layout__intro" markdown="1">

I am an Assistant Professor in AI and NLP for Healthcare at UMC Utrecht. My work combines clinically grounded machine learning, natural language processing, and practical deployment, with a focus on making AI systems useful and trustworthy in real clinical workflows.

</div>

<aside class="about-layout__demo" aria-labelledby="model-demo-heading">

<h3 id="model-demo-heading">Try my own Diffusion Language Model (DLM)!</h3>

<div class="model-demo">
  <iframe
    src="https://ruurd-tini-lad.hf.space/"
    title="Interactive tini-lad language model demo"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
  <p class="model-demo__footer">
    The demo may take a moment to wake up. <a href="https://huggingface.co/spaces/Ruurd/tini-lad">Open tini-lad on Hugging Face</a>.
  </p>
</div>

</aside>

<div class="about-layout__content" markdown="1">

## News

### AAP workshop — Sunday, 18 October 2026

Together with [Robert Bagheri](https://robertab.nl/), I am hosting the [**Alternative Architectures and Paradigms**](https://aap-inlg.github.io/) workshop at INLG 2026 on **Sunday, 18 October 2026**, at the **Spoorwegmuseum in Utrecht**. Join us to explore what comes next for language generation, with a keynote by Chen Shani and six accepted-paper presentations. The workshop runs from **13:00 to 16:30**, with lunch available from **12:00**. [View the program](https://aap-inlg.github.io/program/) and [register through INLG](https://2026.inlgmeeting.org/registration.html).

### BYOD: Build Your Own DLM — preliminary demos

{% assign byod = site.data.projects | where: 'id', 'byod' | first %}
{{ byod.summary }}

{% for demo in byod.links %}[{{ demo.label }}]({{ demo.url }}){% unless forloop.last %} · {% endunless %}{% endfor %}

## Research interests

- Clinical use of large language models
- AI-assisted medical documentation workflows
- Trustworthy evaluation of healthcare AI
- Medical image analysis and clinically grounded ML
- Alternative architectures and generative paradigms for LLMs

## Current focus

I work on AI and NLP methods that support clinicians without losing sight of clinical context, methodological rigor, or practical usability. That includes evaluation design, workflow integration, and collaboration across technical and clinical domains. In the meantime, I also try to develop more efficient LLM methods, for example through diffusive generation, which you can try out on this page!

</div>
</div>
