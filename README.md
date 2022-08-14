# SPARC Portal transcriptomic data visualization in o²S²PARC

## Table of Contents
- Introduction
-	Transcriptomic data on SPARC Portal
- Project Goal
-	Why do we need visualization tools for gene expression and transcriptome data?
-	The pipeline
-	Workflow and outputs
-	User Guide extension
-	Case study example
-	Contributors


## Introduction 

The SPARC Portal is an NIH-funded, open-access data management and sharing science platform, belonging to the Stimulating Peripheral Activity to Relieve Conditions (SPARC) program. The portal aims to advance clinical and academic understanding and interventions in the peripheral nervous system through data integration, knowledge, computational modeling, and spatial mapping. Please refer to the [SPARC website](https://sparc.science/about) for more information.

The SPARC consortium mandates a data sharing policy called the FAIR data sharing principle, which is “Findable, Accessible, Interoperable and Reusable”. This requires all the contributors and projects published on SPARC to be uniformly adapted to the platform data management and sharing agreement, which can be found [here](https://commonfund.nih.gov/sites/default/files/SPARC_material%20sharing%20policy%2026jan17_508.pdf). 

## Transcriptomic data on SPARC Portal

There are multiple transcriptomic datasets available on the SPARC Portal, containing the species of humans, pigs, mice, and rats. Involved anatomical structures include cervical ganglion neurons, celiac ganglion neurons, stellate ganglion neurons, right atrial ganglionic plexus (RAGP) neurons, enteric nervous system, nodose ganglia, sympathetic stellate ganglia, intrinsic cardiac nervous system, interscapular brown adipose tissue (iBAT)- related ganglia, and inguinal white fat (iWAT)-related ganglia. Analysis methods include RNA sequencing, real-time PCR (quantitative PCR or qPCR), small molecule FISH (RNAScope) probes, and gene ontology analysis. All datasets and metadata files are available for download. 

## Project Goal

At present, the platform  SPARC Portal has no data processing or visualization system for transcriptomic and genetic data analysis purposes.
So, We developed a gene expression data visualization oSPARC template. The users can import processed csv files from the SPARC portal diretly or after processing raw data. The audience can visualize an independent dataset by generating a volcano plot, tables, and ontology graphs, or they can compare different datasets by generating Venn diagrams and tables. The analysis focus on Differentially expressed genes ( upregulated and downregulated genes) and their ontology Ontology(GO) (molecular functions, cellular components, and biological processes). 


## Why do we need visualization tools for gene expression and transcriptome data?

The present database provides a wide variety of species, organs, and datatypes differentiated transcriptome and gene expression information pools, which has a great potential for discovering new pathways and molecular. However, the separated and intricate information from transcriptomic and genetic data made it hard for the researchers and clinicians to get an impression of which pathways and molecular matter most in the disease and functions, which are the targets of the following interventions. Thus, we developed the "Expression" o²S²PARC visualization template for gene expression and transcriptome data with maon focus on the ontology analysis. This will expedite the discovery cycle in the SPARC program and attract more scientists and clinicians to contribute to the SPARC. 

## The pipeline

The pipelines in this script are encoded in multiple python jupyter notebooks.

The first set of notebooks generate plots and tables for differentially expressed genes and provides gene ontology details for significantly expressed genes.

The other set of notebook is used to merge the multiple tables consisting of gene expression data and to compare the expression of genes between different samples.

### Requirements

All the notebooks have been tested with python 3.+. Please install the dependencies before running the notebooks as follows.

```bash
pip install -r requirements.txt

```

### Files and formats

All the files used for the analyses, are in the CSV format. Gene expression files must contain following columns:

- Gene
- P.Value
- Log FC

The gene related information can be downloaded from
```
https://www.ncbi.nlm.nih.gov/gene/?term="9606"[Taxonomy+ID]+AND+alive[property]+AND+genetype+protein+coding[Properties]
````
where the taxonomy ID is 9606 for human.


## Workflow and outputs

### Identification of differentially expressed genes 
The genes differential expression profile is base on the p value and the LogFC. The outputs are represented in a Table and a volcano plots, that can include specific genes on demande. As Follows :

<p align="center">
  <img src="https://github.com/SPARC-FAIR-Codeathon/Transcriptomic_oSPARC/blob/pngs/Picture4.png" width="300"/>
</p>

The volcano plot figure :

<p align="center">
  <img src="https://github.com/SPARC-FAIR-Codeathon/Transcriptomic_oSPARC/blob/pngs/Picture5.png" width="300"/>
</p>

### Identification of genes Ontologies 

The top ontologies of all differentially expressed genes are represented in graphs:
<p align="center">
  <img src="https://github.com/SPARC-FAIR-Codeathon/Transcriptomic_oSPARC/blob/pngs/Picture6.png" width="300"/>
</p>

A more detailed onlogy analysis is followed generating six ontological graphs: three for upregulated genes and three for downregulated genes, one for each category: cellular components, biological processes, and molecular functions.

<p align="center">
  <img src="https://user-images.githubusercontent.com/73958439/183561159-e1be388f-a8a1-4ae7-a47a-eb235674275b.png" width="500"/>
</p>

The Gene Ontology overview could be found [here](http://geneontology.org/docs/ontology-documentation/), and it consists of three components: 

- The cellular component(CC) ontological graphs: Describes subcellular structures and macromolecular complexes. We often use CC to annotate cellular locations of gene products.
- The biological process(BP) ontological graphs: Describes the biological programs consisting of multiple molecular activities, such as DNA repair or signal transduction.
- The molecular function(MF) ontological graphs: Describes molecular-level activities performed by gene products, such as “catalysis” or “transport”.


### Two datasets comparison:
This option is useful to Compare gene expression profile between two cells, tissues ,or diseases…

First, the counts for each gene expression type are performed 

<p align="center">
  <img src="https://user-images.githubusercontent.com/73958439/183561299-2a3c5e1a-63b0-4a8a-9070-d65acf4b74c1.png" width="300"/>
</p>

Next, a comparison is performed between the two datasets, so for each gene the expression profile is determined. The result is represented in a table and could be exported in a csv file.

<p align="center">
  <img src="https://user-images.githubusercontent.com/73958439/183561416-76e1da62-4c52-49eb-beed-c91c9ef30571.png" width="500"/>
</p>

## User Guide:
We developed a chrome extension that provides a guide from downloading the data from the SPARC portal plateform to Visualize the data in the "Expression" o²S²PARC.  It also provide a direct access link to the oSPARC template. 
See the folder " User guide extension for more details.

## Case study example: 

For the case studied the genes and pathways implicated in the first stages in Multiple Sclerosis disease, We used dataset for normal-appearing brain tissues from multiple sclerosis patients and healthy donors, and we want to compare the transcriptomics profiles between the two groups: MS vs healthy controls.

To determine the genes associated with the first stages of the diseases, and thanks to the pipeline results, we could determine the pathways that are upregulated and downregulated in MS compared with the controls. 

For the 2 datsets pipeline case study , in addition to the first dataset mentioned previously, we used dataset for the demyelinated lesion also from multiple sclerosis patients and healthy donors. We then copared the two datasets data to determine the genes and pathways implicated in the disease progression.

Besides, we can also compare two independent datasets. For example the MS dataset and another demyelinated dataset such as Guillain-Barre Syndrome (GBS), and in this case wa will be interested in the common genes instead of the differences.

## Contributors

Hiba Benaribi (Leader, Devoloper - Documentation)

Anmol Kiran (Devoloper - Documentation)

Mengyuan Ding (Writer - Documentation)









