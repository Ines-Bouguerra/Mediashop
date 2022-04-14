#!/usr/bin/env python
# coding: utf-8

# In[ ]:


"""
This is a simple application for sentence embeddings: clustering
Sentences are mapped to sentence embeddings and then k-mean clustering is applied.
"""


from sentence_transformers import SentenceTransformer
from sklearn.cluster import KMeans
import pandas as pd

embedder = SentenceTransformer('paraphrase-distilroberta-base-v1')

dataset=pd.read_csv("outputTunisianet.csv")

corpus = dataset['reference']
print(corpus)
corpus_embeddings = embedder.encode(corpus)

# Perform kmean clustering
num_clusters = 87
clustering_model = KMeans(n_clusters=num_clusters)
clustering_model.fit(corpus_embeddings)
cluster_assignment = clustering_model.labels_
clustered_sentences = [[] for _ in range(num_clusters)]
for sentence_id, cluster_id in enumerate(cluster_assignment):
    clustered_sentences[cluster_id].append(corpus[sentence_id])



for i, cluster in enumerate(clustered_sentences):
    print("Cluster ", i+1)
    print(cluster)
    print("")


