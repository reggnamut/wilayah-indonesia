interface T {
	kode_bps: string;
	nama_bps: string;
	kode_dagri: string;
	nama_dagri: string;
}

export default function duplicate(count: number, data: Array<T>, comp: T): boolean {
	if (count > 0 && data[count - 1].kode_dagri === comp.kode_dagri) {
		console.debug("DUPLICATE DETECTED!", data[count - 1].kode_dagri, "&", comp.kode_dagri);
		return false;
	}
	return true;
}
