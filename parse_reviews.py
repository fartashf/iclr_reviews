import numpy as np
import pandas as pd

sub_id_txt = 'Submission Id:'
rev_txt = 'Masked Reviewer ID:'
qual_txt = 'Quantitative Evaluation'
conf_txt = 'Confidence Score'
papers = []
f = open('reviews_all.txt', 'r')
lines = f.readlines()
for (i, line) in enumerate(lines):
    if sub_id_txt in line:
        sub_id = int(line[len(sub_id_txt):])
        papers += [[['ID', sub_id]]]

    if rev_txt in line:
        rev_id = line[len(rev_txt):].rstrip('\n')
        papers[-1] += [[('rev_id', rev_id)]]

    if qual_txt in line:
        s = lines[i+1]
        papers[-1][-1] += [('Q', int(s[:s.index(':')]))]

    if conf_txt in line:
        s = lines[i+1]
        papers[-1][-1] += [('C', int(s[:s.index(':')]))]

Q_scores = []
C_scores = []
q_means = []
c_means = []
mx = 0
for i in range(len(papers)):
    Q_scores += [[]]
    C_scores += [[]]
    for j in range(1, len(papers[i])):
        Q_scores[-1] += [papers[i][j][1][1]]
        C_scores[-1] += [papers[i][j][2][1]]
    q_means += [np.mean(Q_scores[-1])]
    c_means += [np.mean(C_scores[-1])]
    mx = max(mx, np.max(Q_scores[-1]))

print mx
print pd.Series(q_means).describe()
print np.sort(q_means)
print len(q_means)-np.where(np.sort(q_means) >= 6.6)[0][0]
print len(q_means)-np.where(np.sort(q_means) >= 6.7)[0][0]
