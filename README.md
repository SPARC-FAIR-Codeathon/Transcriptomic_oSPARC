# SPARC Portal transcriptomic data visualization in o²S²PARC

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




