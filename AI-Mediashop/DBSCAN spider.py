# -*- coding: utf-8 -*-
"""
Created on Wed Apr 21 03:13:19 2021

@author: user
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import normalize
from sklearn.decomposition import PCA
from sklearn import metrics
from sklearn.preprocessing import LabelEncoder


"""Importing the dataset
"""

dataset=pd.read_csv("outputTunisianet.csv")


"""Remplace categorical values with numeric values 0,1,2,...
"""
labelencoder=LabelEncoder()
for i in dataset:
    dataset[i]=labelencoder.fit_transform(dataset[i])

"""Preprocessing the data
"""

"""Scaling the data to bring all the attributes to a comparable level
"""

scaler = StandardScaler()
X_scaled = scaler.fit_transform(dataset)
  
""" Normalizing the data so that 
 the data approximately follows a Gaussian distribution"""
 
X_normalized = normalize(X_scaled)
  
"""Converting the numpy array into a pandas DataFrame
"""
X_normalized = pd.DataFrame(X_normalized)


"""Reducing the dimensionality of the data to make it visualizable
"""
pca = PCA(n_components = 4)
X_principal = pca.fit_transform(X_normalized)
X_principal = pd.DataFrame(X_principal)
X_principal.columns = ['P1', 'P2', 'P3', 'P4']


"""Apply DBSCAN algorithm
"""
dbscan=DBSCAN(eps=0.0375,min_samples=13)

"""Fitting the model
"""

model=dbscan.fit(X_principal)
labels=model.labels_


sample_cores=np.zeros_like(labels,dtype=bool)
sample_cores[dbscan.core_sample_indices_]=True

"""calculating the number of clusters
"""

n_clusters=len(set(labels))-(1 if -1 in labels else 0)


print(metrics.silhouette_score(X_principal,labels))

"""Visualizing the changes
"""
