export const SkeletonRow = () => (
  <tr
    aria-busy="true"
    data-testid="skeleton-row"
    className="border-b border-gray-200 hover:bg-gray-200 dark:border-gray-800 dark:hover:bg-gray-900 animate-pulse"
  >
    <td className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
    </td>
    <td className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded" />
    </td>
  </tr>
);
