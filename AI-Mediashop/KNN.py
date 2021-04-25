# -*- coding: utf-8 -*-
"""
Created on Thu Apr 22 23:41:53 2021

@author: user
"""

"""

Pour entrainer un modèle et l’évaluer avec la bonne méthodologie on va voir comment:
* Créer un `train_set` et un `test_set`avec la fonction `train_test_split()`
* Valider un modèle avec la technique de `cross validation` 
* Améliorer un modèle en utilisant `GridSerchCV` et `RandomizedSerchCV`   
* Valider un modèle avec `learning_curve`.

"""


import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.decomposition import PCA
from dataprep.eda import plot
from pandas_profiling import ProfileReport
from sklearn.neighbors import KNeighborsClassifier # chargement du modèle KNeighborsClassifier


"""Importing the dataset
"""

dfa = pd.read_csv("outputTunisianet.csv")

plot(dfa)
profile=ProfileReport(dfa)
profile.to_widgets()

plt.plot(dfa.values[:,0],dfa.values[:,1],"rp");


dfa.isna().sum(axis=1)  #claculale the number of missing values line by line
dfa.isnull().sum().sort_values(ascending=False)
dfa.isnull().sum().any()

dfa_clean=dfa.dropna() #thresh=5 :we fix to 5 missing values

dfa.apply(lambda x:x.fillna(x.value_counts().index[0]))

dfa.dtypes

dfa.describe(include='O') #include = 'O': to display categorical values

dfa_clean["brand"].nunique()  #97 categories

dfa['brand'].value_counts()

oneHotEncoder=OneHotEncoder()
matrice_brand=oneHotEncoder.fit_transform(dfa_clean['brand'].values.reshape(-1,1))
matrice_price=oneHotEncoder.fit_transform(dfa_clean['price'].values.reshape(-1,1))
matrice_reference=oneHotEncoder.fit_transform(dfa_clean['reference'].values.reshape(-1,1))
matrice_title=oneHotEncoder.fit_transform(dfa_clean['title'].values.reshape(-1,1))

brand_encode=matrice_brand.toarray()
price_encode=matrice_brand.toarray()
reference_encode=matrice_brand.toarray()
title_encode=matrice_brand.toarray()

print(type(brand_encode))
print(type(price_encode))
print(type(reference_encode))
print(type(title_encode))

brand_df=pd.DataFrame(data=brand_encode,index=dfa_clean.index)
price_df=pd.DataFrame(data=price_encode,index=dfa_clean.index)
reference_df=pd.DataFrame(data=reference_encode,index=dfa_clean.index)
title_df=pd.DataFrame(data=title_encode,index=dfa_clean.index)

oneHotEncoder.categories_

pd.set_option('display.max_rows',price_df.shape[0]+1)

brand_df=brand_df.drop(columns=[0])
price_df=price_df.drop(columns=[0])
reference_df=reference_df.drop(columns=[0])
title_df=title_df.drop(columns=[0])

dfa_encode=pd.concat([brand_df,price_df,reference_df,title_df],axis=1)


pd.plotting.scatter_matrix(dfa_encode,figsize=(20,20))

X=dfa_encode.iloc[:,:]

dfa_encode.hist(figsize=(20,20))

X.hist(figsize=(20,20))

Xss=(X-X.mean())/X.std()

"""Application d'une analyse par coposante principale
"""
acp=PCA(0.9)
Xacp=acp.fit_transform(Xss)
acp.explained_variance_ratio_.shape





y=reference_df
print(y)
X_train, X_test, y_train, y_test=train_test_split(Xss, y, test_size= 0.2,random_state=1)
KNN=KNeighborsClassifier(n_neighbors=1)  
KNN.fit(X_train,y_train)
KNN.score(X_test,y_test)