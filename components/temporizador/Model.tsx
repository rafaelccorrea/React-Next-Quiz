export default interface TemporizadorProps {
    key: any;
    duracao: number;
    tempoEsgotado: () => void;
}