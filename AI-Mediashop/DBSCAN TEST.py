# -*- coding: utf-8 -*-
"""
Created on Thu Apr 22 12:16:47 2021

@author: user
"""


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.cluster import DBSCAN
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import LabelEncoder


def clusterEvaluate(cluster):
    count=np.bincount(cluster)
    count=np.argmax(count)

    return np.count_nonzero(cluster==count)/np.size(cluster)

"""Importing the dataset
"""


dataset=pd.read_csv("outputTunisianet.csv")


"""Remplace categorical values with numeric values 0,1,2,...
"""
labelencoder=LabelEncoder()

for i in dataset:
    dataset[i]=labelencoder.fit_transform(dataset[i])

X=dataset.iloc[:,:].values
norm_data=MinMaxScaler()
X=norm_data.fit_transform(X)
y_truth=dataset.iloc[:,2].values

dbscan=DBSCAN(eps=0.1,min_samples=2)

y=dbscan.fit_predict(X)

cluster_labels=np.unique(y)

homogenities=[]
for i, index in enumerate(cluster_labels):
    if index != -1:
        cluster=y_truth[y==index]
        homogenities.insert(i, clusterEvaluate(cluster))
print(np.mean(homogenities))

"""homogenity=the most frequent target label/ total data points"""