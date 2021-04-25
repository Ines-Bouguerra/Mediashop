# -*- coding: utf-8 -*-
"""
Created on Sun Apr 25 12:29:24 2021

@author: user
"""


import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

## Load Data
df = pd.read_csv("cleaned-data.csv")
X_train = pd.read_csv("train-cleaned.csv")
X_test = pd.read_csv("test-cleaned.csv")

## Application of the method "Elbow"

inertia = []
K = range(1, 90)
for k in K:
    km = KMeans(n_clusters=k)
    km.fit(df)
    inertia.append(km.inertia_) 
print(inertia)

plt.plot(K, inertia,"rs--")
plt.xticks(K)
plt.xlabel('nombre de clusters')
plt.ylabel('Inertie intra-classes')
plt.title("Elbow Method")
plt.grid(True)

model=KMeans(n_clusters=87)

y_pred=model.fit_predict(X_train)

model.cluster_centers_

labels=model.labels_

model.inertia_ 

- model.score(X_train)

# Validation of the K-means model

y_pred_test=model.predict(X_test)


### We try to minimize the intra inertia and maximize the inter inertia


## Cluster evaluation: the silhouette score

silhouette_score(X_train,labels)

## Cluster Profiling 
X_train["labels"]=labels
X_train.head()
clust_profile=X_train
clust_profile=clust_profile.groupby('labels').mean()
clust_profile['frq']=X_train.labels.value_counts().sort_index()
clust_profile