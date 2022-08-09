## SPARC Portal transcriptomic data visualization in o²S²PARC

Table of Contents

•	Our goal 

•	Transcriptomic data on SPARC Portal

•	Why do we need visualization tools for gene expression and transcriptome data?

•	What can we do?

•	The pipeline workflow 

•	The pipeline outputs



## Our Goal

#present, the platform  SPARC Portal has no data processing or visualization system for transcriptomic and genetic data analysis purposes. In fact, there are multiple transcriptomic datasets available on SPARC data browser, as well as the gene expression data from oSPARC template. These datasets would be very much useful for researchers and clinicians in uncovering the underlying Gene Ontology(GO) (molecular functions, cellular components, and biological processes) related to the peripheral nervous system and related diseases. With Gene Ontology(GO) tools, we could uncover the myth of any interested pathophysiological processes with gene expression and transcriptome data in SPARC portal. This will help promote the discovery of potential targets for future interventions and treatments on peripheral nervous system and related diseases.

## Transcriptomic data on SPARC Portal
#Till Aug 8, 2022, there are 19 projects available on the SPARC Portal, containing the species of humans, pigs, mice, and rats. Involved anatomical structures include cervical ganglion neurons, celiac ganglion neurons, stellate ganglion neurons, right atrial ganglionic plexus (RAGP) neurons, enteric nervous system, nodose ganglia, sympathetic stellate ganglia, intrinsic cardiac nervous system, interscapular brown adipose tissue (iBAT)- related ganglia, and inguinal white fat (iWAT)-related ganglia. Analysis methods include RNA sequencing, real-time PCR (quantitative PCR or qPCR), small molecule FISH (RNAScope) probes, and gene ontology analysis. All datasets and metadata files are available for download. 

## Why do we need visualization tools for gene expression and transcriptome data?
#The present database provides a wide variety of species, organs, and datatypes differentiated transcriptome and gene expression information pools, which has a great potential for discovering new pathways and molecular. However, the separated and intricate information from transcriptomic and genetic data made it hard for the researchers and clinicians to get an impression of which pathways and molecular matter most in the disease and functions, which are the targets of the following interventions. Thus, we utilized visualization tools for gene expression and transcriptome data by clustering group genes or samples which share similar patterns of gene expression and transcriptomic profiles. This will expedite the discovery cycle in the SPARC program and attract more scientists and clinicians to contribute to the SPARC. 

## What can we do?
#We developed a chrome extension that provides a guide for downloading and analyzing transcriptomic data available on the SPARC portal and a link to access the oSPARC template. Besides, we built gene expression visualization functions through the oSPARC template. The users can import processed csv files to see the gene expression graphs. The audience can visualize an independent dataset by generating a volcano plot, tables, and ontology graphs, or they can compare different datasets by generating Venn diagrams and tables.


## the pipeline workflow:

The pipelines in this script are designed to visualize the transcriptomic data from the SPARC Portal. The pipelines are encoded in multiple python jupyter notebooks.

The first set of notebooks generate plots and tables for differentially expressed genes and provides gene ontology details for significantly expressed genes.

The other set of notebook is used to merge the multiple tables consisting of gene expression data and to compare the expression of genes between different samples.

## Requirements

All the notebooks have been tested with python 3.+. Please install the dependencies before running the notebooks as follows.

```bash
pip install -r requirements.txt

```

# Files and formats

All the files used for the analyses, are in the CSV format. Gene expression files must contain following columns:

- Gene
- P.Value
- Log FC

The gene related information can be downloaded from
```
https://www.ncbi.nlm.nih.gov/gene/?term="9606"[Taxonomy+ID]+AND+alive[property]+AND+genetype+protein+coding[Properties]
````
where the taxonomy ID is 9606 for human.

## Pipeline Outputs :
First the pipeline will identify differentially expressed genes (DEGs), and define if they are upregulated or downregulated. The espression data is also represented in a volcano plot.
![image](https://user-images.githubusercontent.com/73958439/183560745-bbbfdd8b-7403-4d12-bd1b-bc3dcc94ccb4.png)
![image](https://user-images.githubusercontent.com/73958439/183560724-dd10b756-c076-4a0c-84fc-463259da646d.png)

Next the ontology of the DEGs are defined: biological processe, Molecular function and Cellular Compenant. The results are represented in 6 graphs.
![image](https://user-images.githubusercontent.com/73958439/183561159-e1be388f-a8a1-4ae7-a47a-eb235674275b.png)

## Compare two datasets:
This option is useful to Compare gene expression profile between two cells, tissues , diseases…
The counts for each gene expression type are performed 
![image](https://user-images.githubusercontent.com/73958439/183561299-2a3c5e1a-63b0-4a8a-9070-d65acf4b74c1.png)
Also a csv file is created , It specify The expresion profile in each dataset, for all the genes.
![image](https://user-images.githubusercontent.com/73958439/183561416-76e1da62-4c52-49eb-beed-c91c9ef30571.png)







