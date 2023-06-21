function countRectangles(A, B) {
    const N = A.length;
    let cnt = 0;

    const coordsHash = new Set();

    for (let i = 0; i < N; i++) {
        let hash = `${A[i]}@${B[i]}`;
        coordsHash.add(hash);
    }

    for (let i = 0; i < N; i++){
        for (let j = i + 1; j < N; j++) {
            let p1 = [A[i], B[i]];
            let p2 = [A[j], B[j]];

            if(!(p1[0] == p2[0] || p1[1] == p2[1])) {
                let reqCoord1 = `${A[i]}@${B[j]}`;
                let reqCoord2 = `${A[j]}@${B[i]}`;
                if (coordsHash.has(reqCoord1) && coordsHash.has(reqCoord2)) cnt++;
            }
        }
    }

    return cnt/2
}