/**
 * @type {import('prettier').Options}
 */
module.exports = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: 'avoid',
    plugins: [
        require.resolve('@plasmohq/prettier-plugin-sort-imports'),
        require.resolve('prettier-plugin-svelte')
    ],
    importOrder: ['^@plasmohq/(.*)$', '^~(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    svelteSortOrder: 'options-scripts-markup-styles'
}
